import {UserEntity} from "../../orm/entities/userEntity";


export class UserDto {
    readonly email: string;
    readonly password: string;
    readonly isAdmin: boolean
    readonly walletState: number


    constructor(entity: UserEntity) {
        this.email = entity.email;
        this.isAdmin = entity.isAdmin;
        this.walletState = entity.walletState
    }
}