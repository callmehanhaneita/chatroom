import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Member } from '../chat/repository/member.schema';
import { Model } from 'mongoose';
import { Group } from '../chat/repository/group.schema';
import { Message } from '../chat/repository/message.schema';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Member.name) private memberModel: Model<Member>,
    @InjectModel(Group.name) private groupModel: Model<Group>,
    @InjectModel(Message.name) private messageModel: Model<Message>,
  ) {}

  async addDirectMessage(data: Message) {
    new this.messageModel(data).save();
  }
}
