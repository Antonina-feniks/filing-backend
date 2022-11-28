import { Controller, Post, Get, Put, Delete, Param, Request, Body, UseGuards } from '@nestjs/common';
import {UpdateResult, DeleteResult} from 'typeorm';
import { CardService } from './card.service';
import { CardEntity } from './card.entity';
import {JwtAuthGuard} from "../guard/jwt-auth.guard";
import {ApiBearerAuth, ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiBearerAuth()
@ApiTags('cards')
@Controller('api/v1/card')
export class CardsController {
    constructor(private cardService: CardService) { }

    @ApiResponse({
        status: 200,
        description: 'The found record',
        type: CardEntity,
    })
    @UseGuards(JwtAuthGuard)
    @Get()
    async GetAll(): Promise<CardEntity[]> {
        return await this.cardService.getAll();

    }

    @UseGuards(JwtAuthGuard)
    @ApiOperation({ summary: 'Create card' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @Post()
    async Create(@Request() req, @Body() card: CardEntity): Promise<CardEntity> {
        return await this.cardService.create(card, req.user);
    }


    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async GetOne(@Param() id: number): Promise<CardEntity> {
        return await this.cardService.getOne(id);

    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async Update(@Param() id: number, @Body() card: CardEntity, @Request() req): Promise<UpdateResult> {
        return await this.cardService.update(id, card, req.user);

    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async Delete(@Param() id: number, @Request() req): Promise<DeleteResult> {
        return await this.cardService.delete(id, req.user);

    }
}
