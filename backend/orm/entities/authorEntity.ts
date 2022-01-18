import{
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany
} from 'typeorm'
import {gameEntity} from './gameEntity'


@Entity('authors')
export class AuthorEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    @CreateDateColumn()
    created_at: Date;
    @OneToMany(type => gameEntity, game => game.author, {onDelete: "CASCADE"})
    games: gameEntity[]
    @Column()
    @UpdateDateColumn()
    updated_at: Date;
}