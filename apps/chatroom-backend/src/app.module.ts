import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ChatModule } from './chat/chat.module';
import { MemberResolver } from './member/member.resolver';
import { MessageResolver } from './message/message.resolver';
import { EventGateway } from './event/event.gateway';
import { EventModule } from './event/event.module';

@Module({
  imports: [
    ChatModule,
    EventModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    EventModule,
  ],
  controllers: [AppController],
  providers: [AppService, MemberResolver, MessageResolver, EventGateway],
})
export class AppModule {}
