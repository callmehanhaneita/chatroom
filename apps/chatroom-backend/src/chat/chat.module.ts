import { Module } from '@nestjs/common';
import { ChatResolver } from './chat.resolver';
import { ChatService } from './chat.service';
import { MemberModule } from '../member/member.module';

@Module({
  imports: [MemberModule],
  providers: [ChatResolver, ChatService],
})
export class ChatModule {}
