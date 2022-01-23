import {CookieOptions, NextFunction, Request, Response} from 'express'
import {Exception} from "../exception";
import {httpAuthDecrypt} from "../services/basic-auth";
import {getUserByEmail} from "./users/userController";
import {matchPassword} from "../services/password";
import {sign} from "../services/jwt";
import {UserDto} from "./users/user.dto";



export const basicAuth = async (req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.headers
    if(!email||!password){
        return next(new Exception("Zly header w zapytaniu http"));
    }
    //console.log({email,password})
    try {
        const user = await getUserByEmail(email as string);

        // Znajdz uzytkownika
        if (!user) {
            return next(new Exception("No user"));
        }

        // Sprawdz hasla
        if (!(await matchPassword(user.password, password as string))) {
            return next(new Exception("Cos zle z haslem"));
        }

        // Wygeneruj token
        const token = sign(user.id);                                    // Do jednoznacznej identyfikacji uzytkownika wystarczy jego ID (klucz glowny) lub email
        //console.log({token})
        const publicCookies: CookieOptions = {
            secure: false,                    // Wysyłane tylko po HTTPS (wylaczyc dla deweloperki)
            sameSite:'lax',
            maxAge: 1000 * 60 * 60 * 1,                                           // Czas przechowywania przez przegladarke (12h - tozsamy z dlugoscia zycia tokenu)
        }

        const httpCookie: CookieOptions =  {
            ...publicCookies,
            httpOnly: true,                                                         // Bez dostepu przez JS
        }

        res.cookie('auth', token, httpCookie);
        res.cookie('isLogged', true, publicCookies);
        return res.send(new UserDto(user))
    } catch (err:any) {
        return next(new Exception(err.message));
    }
};