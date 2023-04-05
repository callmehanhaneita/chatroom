import { Module } from '@nestjs/common';
import { MessageModule } from '../message/message.module';
import { DirectChatResolver } from './direct-chat.resolver';
import { MemberModule } from '../member/member.module';

@Module({
  imports: [MessageModule, MemberModule],
  providers: [DirectChatResolver],
})
export class DirectChatModule {}
