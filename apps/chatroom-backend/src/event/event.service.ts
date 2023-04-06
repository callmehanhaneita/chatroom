import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Group } from '../chat/repository/group.schema';
import { DirectMessageEvent } from './event.gateway';
import { v4 as uuid } from 'uuid';

@Injectable()
export class EventService {
  constructor(@InjectModel(Group.name) private groupModel: Model<Group>) {}

  async addDirectMessage(data: DirectMessageEvent) {
    const id = uuid();
    const createdAt = new Date();
    await this.groupModel
      .findByIdAndUpdate(
        data.to,
        {
          $push: { messages: { ...data, _id: uuid(), createdAt } },
        },
        { new: true, useFindAndModify: false },
      )
      .exec();
    return {
      ...data,
      id,
      createdAt,
    };
  }

  async findAllGroups(memberId: string) {
    return this.groupModel.find({ members: { $in: [memberId] } }).exec();
  }
}
