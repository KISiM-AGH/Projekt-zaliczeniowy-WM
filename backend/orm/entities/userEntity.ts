import {
    Column,
    CreateDateColumn,
    Entity,
    Index,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm'
import {gameEntity} from "./gameEntity";



@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Index({ unique:true })
    email: string;
    @Column()
    password: string
    @Column()
    isAdmin: boolean
    @Column()
    walletState: number
    @Column()
    @CreateDateColumn()
    created_at: Date
    @Column()
    @UpdateDateColumn()
    updated_at: Date;

    @ManyToMany(() => gameEntity)
    @JoinTable()
    library: gameEntity[]

}