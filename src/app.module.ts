import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule, GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';



@Module({
  imports: [GraphQLModule.forRoot({
    typePaths: ['./**/*.graphql'],
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
