import {CreateGameDto} from "./dto/createGameDto";
import {getCustomRepository} from "typeorm";
import {gameEntity} from "../../orm/entities/gameEntity";
import {GameRepository} from "../../orm/repos/gameRep";


export const createGame = async (data: CreateGameDto): Promise<gameEntity> => {
    const { title, author, price } = data;

    const gameRepository = getCustomRepository(GameRepository)
    const game = new gameEntity();
    game.title = title;
    game.author = author;
    game.price = price;
    return await gameRepository.save(game);
}

export const getGames = async () : Promise<[gameEntity[], number]> => {

    const gameRepository = getCustomRepository(GameRepository);



    const gamesPromise = gameRepository.find();
    const countPromise = gameRepository.count();

    return await Promise.all([gamesPromise, countPromise]);
}
export const getGameById = async (id: number): Promise<gameEntity | undefined> => {
    const gameRepository = getCustomRepository(GameRepository);
    return await gameRepository.findOne(id);
}
export const removeGame = async(game: gameEntity): Promise<boolean> => {
    const gameRepository = getCustomRepository(GameRepository);
    await gameRepository.remove(game);
    return true;
}