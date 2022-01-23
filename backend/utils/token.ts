import { Request, Response, NextFunction } from 'express';
import jwt, {JwtPayload} from 'jsonwebtoken';
import {Exception} from "../exception"
import {verifyJwt } from "../services/jwt";
import {RequestWithUser} from "../Express";
import {getUserByID} from "../api/users/userController";

export const token = (required = true) => async (req: Request, res: Response, next: NextFunction) => {
    const tokenCookie = req.cookies?.auth
    if (!tokenCookie) return next(new Exception("Brak ciasteczek"));
    let decodedToken: JwtPayload;

    try {
        decodedToken = verifyJwt(tokenCookie) as JwtPayload;
    } catch {
        return next(new Exception());
    }


    const user = {
        id: parseInt(decodedToken.sub!)
    }

    if ((required && !user)) {
        return next(new Exception());
    }
    const userData = await getUserByID(user.id);
    if(!userData){
        res.status(403).send("Unauthorized");
    }
    (req as RequestWithUser).user = userData!;
    console.log('next')
    next();

};