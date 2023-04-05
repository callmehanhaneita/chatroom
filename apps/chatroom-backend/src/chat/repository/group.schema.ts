import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type GroupDocument = HydratedDocument<Group>;

@Schema({ timestamps: true })
export class Group {
  @Prop()
  _id: string;

  @Prop()
  name: string;

  @Prop()
  members: string[];
}

export const GroupSchema = SchemaFactory.createForClass(Group);
