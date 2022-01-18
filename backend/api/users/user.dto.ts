import {UserEntity} from "../../orm/entities/userEntity";


export class UserDto {
    readonly email: string;
    readonly password: string;


    constructor(entity: UserEntity) {
        this.email = entity.email;
    }
}