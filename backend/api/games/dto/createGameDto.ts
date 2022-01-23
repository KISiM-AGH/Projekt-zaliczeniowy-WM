import {IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateGameDto {
    @IsString()
    readonly author: string

    @IsString()
    @IsNotEmpty()
    readonly title: string;
    @IsNumber()
    @IsNotEmpty()
    readonly price: number

}