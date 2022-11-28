import { Entity, OneToOne, JoinColumn,Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import {CardEntity} from "../card/card.entity";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @CreateDateColumn()
    createdAt : String

    @UpdateDateColumn()
    updateAt : String

    @OneToMany(type => CardEntity, card => card.id)
    @JoinColumn()
    card: CardEntity[]
}
