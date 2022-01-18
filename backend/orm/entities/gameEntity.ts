import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne} from 'typeorm'
import {AuthorEntity} from './authorEntity'

@Entity('games')
export class gameEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToOne(type => AuthorEntity, author => author.games)
    author: AuthorEntity;
    @Column()
    authorId: number;

    @Column()
    @CreateDateColumn()
    created_at: Date;

    @Column()
    @UpdateDateColumn()
    updated_at: Date;
}