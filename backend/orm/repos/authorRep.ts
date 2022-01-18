import {EntityRepository, Repository} from 'typeorm'
import {AuthorEntity} from "../entities/authorEntity";


@EntityRepository(AuthorEntity)
export class AuthorRepository extends Repository<AuthorEntity>{

}