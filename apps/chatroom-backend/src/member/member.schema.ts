import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MemberDocument = HydratedDocument<Member>;

@Schema()
export class Member {
  @Prop()
  _id: string;

  @Prop()
  name: string;
}

export const MemberSchema = SchemaFactory.createForClass(Member);
