import { HydratedDocument, Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type GroupDocument = HydratedDocument<Group>;

@Schema({ timestamps: true })
export class Group {
  @Prop()
  _id: string;

  @Prop()
  name: string;

  @Prop({ type: [{ type: String, ref: 'Member' }] })
  members: string[];

  @Prop()
  messages: Message[];
}

@Schema()
class Message {
  @Prop()
  _id: string;

  @Prop()
  from: string;

  @Prop()
  content: string;
}

export const GroupSchema = SchemaFactory.createForClass(Group);
