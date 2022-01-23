import {NextFunction, Response, Request} from "express";
import {Exception} from "../../exception";
import {CreateGameDto} from "./dto/createGameDto";
import {createGame, getGameById, getGames, removeGame} from "./gameService";


export const list = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const games = await getGames()
        return res.json(games);
    } catch (e) {
        return next(new Exception((<Error>e).message));
    }
};



export const show = async (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);
    console.log(id)
    try {
        const game = await getGameById(id);
        if (!game) {
            return next(new Exception("There is no such game"));
        }
        res.json(game);
    } catch (err) {
        return next(new Exception("Bad request"));
    }
}

export const add = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body as any as CreateGameDto;

    try {

        const game = await createGame(data);
        return res.json(game);
    } catch (err) {
        return next(new Exception("Bad request"));
    }
}

// export const edit = async (req: Request, res: Response, next: NextFunction) => {
//     const id = parseInt(req.params.id);
//     const data = req.body as EditBookDto;
//
//     try {
//         let book = await getBookById(id);
//         if (!book) {
//             return next(new Exception("No book "));
//         }
//
//         const author = await getAuthorById(data.authorId);
//         if (!author) {
//             return next(new Exception("No author"));
//         }
//
//         book = await editBook(book, data);
//         return res.json(book);
//     } catch (err) {
//         return next(new Exception("Bad request"));
//     }
//
// };
//
export const destroy = async (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);

    try {
        const game = await getGameById(id);
        if (!game) {
            return next(new Exception("Game not found"));
        }

        await removeGame(game);
        res.status(204).end();
    } catch (err) {
        return next(new Exception("bad request"));
    }

};

