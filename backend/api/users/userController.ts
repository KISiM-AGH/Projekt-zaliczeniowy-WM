import {NextFunction, Request, Response} from 'express'
import {gameEntity} from "../../orm/entities/gameEntity";
import {CreateUserDto} from './createUser.dto'
import {Exception} from "../../exception";
import {getCustomRepository} from "typeorm";
import {UserEntity} from "../../orm/entities/userEntity"
import {UserRepository} from "../../orm/repos/userRep"
import {UserDto} from "./user.dto";
import {RequestWithUser} from "../../Express"
import {hashPassword} from "../../services/password";
import {getGameById} from "../games/gameService";

const createUser = async(data: CreateUserDto): Promise<UserEntity>=>{
    const userRepository = getCustomRepository(UserRepository)
    const newUser = new UserEntity()
    newUser.email = data.email
    newUser.password = await hashPassword(data.password)
    newUser.isAdmin = false
    newUser.walletState = 0
    return await userRepository.save(newUser)
}
export const addGame = async(req: Request, res: Response, next: NextFunction)=> {
    const user = (req as RequestWithUser).user
    const idGame = parseInt(req.params.id)
    const userRepository = getCustomRepository(UserRepository)
    const game = await getGameById(idGame)
    console.log({user})
    if (game && user.walletState>=game.price)
    {
        user.library=[...user.library, game]
        user.walletState-=game.price
    }
    return await userRepository.update({id:user.id},user)
}
export const getUserByEmail = async (email: string): Promise<UserEntity | undefined> => {
    const userRepository = getCustomRepository(UserRepository);
    return await userRepository.findOne({where: {email}});
}
export const getUserByID = async (id: number): Promise<UserEntity | undefined> => {
    const userRepository = getCustomRepository(UserRepository);
    return await userRepository.findOne({where: {id}});
}


export const register = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body as CreateUserDto;

    let user = await getUserByEmail(data.email);

    if (user) {
        return next(new Exception());
    }

    try {
        const newUser = await createUser(req.body);
        res.status(201).json(new UserDto(newUser));
    } catch (err) {
        return next(new Exception());
    }

}
export const whoami  = async (req: Request, res: Response, next: NextFunction) => {
    const user = (req as RequestWithUser).user;
    return res.json(user);
}