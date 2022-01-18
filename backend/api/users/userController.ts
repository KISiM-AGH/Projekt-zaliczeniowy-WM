import {NextFunction, Request, Response} from 'express'
import {gameEntity} from "../../orm/entities/gameEntity";
import {CreateUserDto} from './createUser.dto'
import {Exception} from "../../exception";



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
        //jakies wyjatki, na razie jebac pradem
    }

}
//to do jason toker
export const whoami  = async (req: Request, res: Response, next: NextFunction) => {
    const user = (req as RequestWithUser).user;
    // w user bedziemy mieć jedynie id z tokenu
    return res.json(user);
}