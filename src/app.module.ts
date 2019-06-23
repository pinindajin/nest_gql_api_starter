import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule, GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';
import { GraphQLOptions } from './graphql-options';



@Module({
  imports: [GraphQLModule.forRootAsync({
    useClass: GraphQLOptions,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
