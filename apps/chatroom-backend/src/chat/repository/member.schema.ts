import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MemberDocument = HydratedDocument<Member>;

@Schema({ timestamps: true })
export class Member {
  @Prop()
  _id: string;

  @Prop()
  name: string;

  @Prop()
  avatar: string;
}

export const MemberSchema = SchemaFactory.createForClass(Member);
