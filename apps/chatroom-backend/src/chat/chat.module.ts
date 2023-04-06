import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatResolver } from './chat.resolver';
import { Group, GroupSchema } from './repository/group.schema';
import { ChatService } from './chat.service';
import { Member, MemberSchema } from './repository/member.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Member.name, schema: MemberSchema },
      { name: Group.name, schema: GroupSchema },
    ]),
  ],
  providers: [ChatResolver, ChatService],
})
export class ChatModule {}
