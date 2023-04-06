import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ChatModule } from './chat/chat.module';
import { EventModule } from './event/event.module';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';

mongoose.set('debug', true);

@Module({
  imports: [
    ChatModule,
    EventModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot(
      'mongodb://user_dev:pwd_dev@127.0.0.1:27017/chatroom-dev',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
