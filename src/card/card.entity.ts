import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {UserEntity} from "../auth/user.entity";
import {ApiProperty} from "@nestjs/swagger";

@Entity()
export class CardEntity {
    @ApiProperty({ example: 1, description: 'ID карточки' })
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty({ example: "Платёжка", description: 'Название карточки' })
    @Column()
    name: string

    @ApiProperty({ example: "За жкх", description: 'Описание' })
    @Column()
    description: string

    @ApiProperty({ example: "Шкаф, нижняя полка, коробка №1", description: 'Место хранение' })
    @Column()
    location: string

    @ApiProperty({ example: "2022-11-28T11:35:56.765Z", description: 'Дата создания' })
    @CreateDateColumn({nullable: true})
    createdAt : String

    @ApiProperty({ example: "2022-11-28T11:35:56.765Z", description: 'Дата обновления' })
    @UpdateDateColumn({nullable: true})
    updateAt : String

    @ManyToOne(type => UserEntity, user => user.id)
    @JoinColumn()
    user: UserEntity
}
