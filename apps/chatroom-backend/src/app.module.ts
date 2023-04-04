import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ChatModule } from './chat/chat.module';
import { MemberResolver } from './member/member.resolver';
import { MessageResolver } from './message/message.resolver';

@Module({
  imports: [
    ChatModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, MemberResolver, MessageResolver],
})
export class AppModule {}
