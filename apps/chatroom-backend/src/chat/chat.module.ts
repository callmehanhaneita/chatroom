import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatResolver } from './chat.resolver';
import { Member, MemberSchema } from './repository/member.schema';
import { Message, MessageSchema } from './repository/message.schema';
import { Group, GroupSchema } from './repository/group.schema';
import { ChatService } from './chat.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Member.name, schema: MemberSchema },
      { name: Group.name, schema: GroupSchema },
      { name: Message.name, schema: MessageSchema },
    ]),
  ],
  providers: [ChatResolver, ChatService],
})
export class ChatModule {}
