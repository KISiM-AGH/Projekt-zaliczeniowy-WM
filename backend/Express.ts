import {Request} from 'express';
import {UserEntity} from "./orm/entities/userEntity";

export interface RequestWithUser extends Request
{
    user: UserEntity
}