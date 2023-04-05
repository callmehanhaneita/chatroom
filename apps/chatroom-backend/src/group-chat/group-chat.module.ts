import { Module } from '@nestjs/common';
import { GroupChatService } from './group-chat.service';
import { MemberModule } from '../member/member.module';
import { MessageModule } from '../message/message.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Chat, GroupChatSchema } from './group-chat.schema';
import { GroupChatResolver } from './group-chat.resolver';

@Module({
  imports: [
    MemberModule,
    MessageModule,
    MongooseModule.forFeature([{ name: Chat.name, schema: GroupChatSchema }]),
  ],
  providers: [GroupChatResolver, GroupChatService],
})
export class GroupChatModule {}
