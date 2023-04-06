import { Module } from '@nestjs/common';
import { EventGateway } from './event.gateway';
import { EventService } from './event.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Member, MemberSchema } from '../chat/repository/member.schema';
import { Group, GroupSchema } from '../chat/repository/group.schema';
import { Message, MessageSchema } from '../chat/repository/message.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Member.name, schema: MemberSchema },
      { name: Group.name, schema: GroupSchema },
      { name: Message.name, schema: MessageSchema },
    ]),
  ],
  providers: [EventGateway, EventService],
})
export class EventModule {}
