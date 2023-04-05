import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Member } from './member.schema';
import { Model } from 'mongoose';

@Injectable()
export class MemberService {
  constructor(@InjectModel(Member.name) private memberModel: Model<Member>) {}

  async findAll(): Promise<Member[]> {
    const members = await this.memberModel.find().exec();
    console.log('members', members);
    return members;
  }
}
