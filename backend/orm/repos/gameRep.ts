import {EntityRepository, Repository} from "typeorm";
import {gameEntity} from "../entities/gameEntity";

@EntityRepository(gameEntity)
export class BookRepository extends Repository<gameEntity> {
    findByAuthorPartialName(author: string): Promise<gameEntity[]>{
        return this.createQueryBuilder("game")
            .leftJoinAndSelect('game.author', 'author')
            .where("author.name like :name", { name:`%${author}%` })
            .getMany();
    }
}