import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {CardEntity} from "./card.entity";
import {DeleteResult, Repository, UpdateResult} from "typeorm";
import {UserEntity} from "../auth/user.entity";

@Injectable()
export class CardService {
    constructor(@InjectRepository(CardEntity) private cardRepository: Repository<CardEntity>) { }

    async getAll(): Promise<CardEntity[]> {
        return await this.cardRepository.find()
    }

    async create(card: CardEntity, user: UserEntity): Promise<CardEntity> {
            return await this.cardRepository.save(card);

    }

    async getOne(id: number): Promise<CardEntity> {
        return this.cardRepository.findOne({where :{id}});
    }

    async update(id: number, card: CardEntity, user: UserEntity): Promise<UpdateResult> {
            return await this.cardRepository.update(id, card);
    }

    async delete(id: number, user: UserEntity): Promise<DeleteResult> {
            return await this.cardRepository.delete(id);
    }
}
