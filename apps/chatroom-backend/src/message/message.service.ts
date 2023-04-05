import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './message.schema';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<Message>,
  ) {}

  findByChatId({ chatId }: { chatId: string }) {
    return this.messageModel.find({ toChat: chatId }).exec();
  }

  async findByMemberId({ memberId }: { memberId: string }) {
    return this.messageModel.aggregate([
      {
        $match: {
          $or: [
            { from: memberId, toMember: { $ne: null } },
            { toMember: memberId, from: { $ne: null } },
          ],
        },
      },
      {
        $group: {
          _id: {
            $cond: {
              if: { $eq: ['$from', memberId] },
              then: '$toMember',
              else: '$from',
            },
          },
          messages: {
            $push: {
              from: '$from',
              toMember: '$toMember',
              content: '$content',
            },
          },
        },
      },
      {
        $project: {
          _id: '$_id',
          id: '$_id',
          messages: '$messages',
        },
      },
    ]);
  }
}
