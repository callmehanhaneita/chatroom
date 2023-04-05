import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MessageDocument = HydratedDocument<Message>;

@Schema({ timestamps: true })
export class Message {
  @Prop()
  _id: string;

  @Prop()
  from: string;

  @Prop()
  toGroup?: string;

  @Prop()
  toMember?: string;

  @Prop()
  type: string;

  @Prop()
  content: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
