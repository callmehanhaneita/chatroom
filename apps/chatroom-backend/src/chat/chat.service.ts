import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Member } from './repository/member.schema';
import { Group } from './repository/group.schema';
import { Message } from './repository/message.schema';
import { Chat } from './chat.model';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Member.name) private memberModel: Model<Member>,
    @InjectModel(Group.name) private groupModel: Model<Group>,
    @InjectModel(Message.name) private messageModel: Model<Message>,
  ) {}

  async findByMemberId({ memberId }: { memberId: string }): Promise<Chat[]> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return await this.groupModel
      .find({ members: { $in: [memberId] } })
      .populate('members', { id: 1, name: 1, avatar: 1 })
      .exec();
  }
}
