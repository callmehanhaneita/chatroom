import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Group } from '../chat/repository/group.schema';
import { DirectMessageEvent } from './event.gateway';

@Injectable()
export class EventService {
  constructor(@InjectModel(Group.name) private groupModel: Model<Group>) {}

  async addDirectMessage(data: DirectMessageEvent) {
    console.log(
      'dddd',
      data.to,
      await this.groupModel
        .find({
          _id: data.to,
        })
        .exec(),
    );
    return this.groupModel
      .findByIdAndUpdate(
        data.to,
        { $push: { messages: data } },
        { new: true, useFindAndModify: false },
      )
      .exec();
  }
}
