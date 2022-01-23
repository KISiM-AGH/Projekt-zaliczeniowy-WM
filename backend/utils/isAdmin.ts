import {NextFunction, Request, Response} from "express";
import {RequestWithUser} from "../Express";


export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const user = (req as RequestWithUser).user
    if (!user.isAdmin){
        res.status(403).send("Unauthorized");
    }
    next()
}