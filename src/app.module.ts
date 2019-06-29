import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule, GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';
import { GraphQLOptions } from './graphql/graphql-options';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './api/user/user.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphQLOptions,
    }),
    PrismaModule,
    UserModule,
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
