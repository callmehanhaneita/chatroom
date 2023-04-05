import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ChatModule } from './chat/chat.module';
import { MemberResolver } from './member/member.resolver';
import { MessageResolver } from './message/message.resolver';
import { EventModule } from './event/event.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MemberModule } from './member/member.module';

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
    MemberModule,
  ],
  controllers: [AppController],
  providers: [AppService, MemberResolver, MessageResolver],
})
export class AppModule {}
