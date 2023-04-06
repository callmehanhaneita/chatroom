import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MessageDocument = HydratedDocument<Message>;

@Schema({ timestamps: true })
export class Message {
  _id: mongoose.Types.ObjectId;

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

  @Prop()
  createdAt: Date;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
