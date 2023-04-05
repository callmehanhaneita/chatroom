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
    const chatsPromise = this.messageModel
      .aggregate([
        {
          $lookup: {
            from: 'groups',
            localField: 'toGroup',
            foreignField: '_id',
            as: 'group',
          },
        },
        {
          $match: {
            $or: [
              { from: memberId },
              { toMember: memberId },
              { 'group.members': memberId },
            ],
          },
        },
        {
          $group: {
            _id: {
              $cond: {
                if: { $eq: ['$type', 'GROUP_MESSAGE'] },
                then: '$toGroup',
                else: '$toMember',
              },
            },
            messages: {
              $push: {
                id: '$id',
                from: '$from',
                toMember: '$toMember',
                toGroup: '$toGroup',
                content: '$content',
                createdAt: '$createdAt',
              },
            },
            type: {
              $first: '$type',
            },
            toGroup: {
              $first: '$toGroup',
            },
            toMember: {
              $first: '$toMember',
            },
          },
        },
        {
          $project: {
            _id: '$_id',
            id: '$_id',
            type: '$type',
            messages: '$messages',
            toGroup: '$toGroup',
            toMember: '$toMember',
          },
        },
      ])
      .exec();
    return chatsPromise.then((chats) => {
      return Promise.all(
        chats.map(async (chat) => {
          if (chat.type === 'GROUP_MESSAGE') {
            chat.members = await this.groupModel
              .findOne({
                _id: chat.toGroup,
              })
              .exec()
              .then((group) => {
                chat.name = group.name;
                return this.memberModel.find({
                  _id: {
                    $in: group.members,
                  },
                });
              });
          } else {
            chat.members = await this.memberModel
              .findOne({
                _id: chat.toMember,
              })
              .exec()
              .then((member) => {
                chat.name = member.name;
                return [member];
              });
          }
          return chat;
        }),
      );
    });
  }
}
