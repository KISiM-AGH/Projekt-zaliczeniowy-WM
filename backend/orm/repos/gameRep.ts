import {EntityRepository, Repository} from "typeorm";
import {gameEntity} from "../entities/gameEntity";

@EntityRepository(gameEntity)
export class GameRepository extends Repository<gameEntity> {
}