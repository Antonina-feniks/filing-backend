import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { CardModule } from './card/card.module';

@Module({
  imports: [AuthModule,
    TypeOrmModule.forRoot({
      type :"sqlite",
      database: "filingDB",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    CardModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
