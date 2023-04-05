import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chat } from './chat.schema';

@Injectable()
export class ChatService {
  constructor(@InjectModel(Chat.name) private chatModel: Model<Chat>) {}

  async findByMemberId({ memberId }: { memberId: string }): Promise<Chat[]> {
    return this.chatModel
      .find({ members: { $elemMatch: { $eq: memberId } } })
      .exec();
  }
}
