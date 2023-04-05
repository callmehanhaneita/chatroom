import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Member } from './member.schema';
import { Model } from 'mongoose';

@Injectable()
export class MemberService {
  constructor(@InjectModel(Member.name) private memberModel: Model<Member>) {}

  async findMembersIn({
    memberIds,
  }: {
    memberIds: string[];
  }): Promise<Member[]> {
    return this.memberModel
      .find({
        id: { $in: memberIds },
      })
      .exec();
  }

  async findById({ memberId }: { memberId: string }) {
    return this.memberModel.findById(memberId).exec();
  }
}
