import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne} from 'typeorm'


@Entity('games')
export class gameEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
    @Column()
    author: string;
    @Column()
    price: number

    @Column()
    @CreateDateColumn()
    created_at: Date;

    @Column()
    @UpdateDateColumn()
    updated_at: Date;
}