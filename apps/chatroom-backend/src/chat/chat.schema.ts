import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ChatDocument = HydratedDocument<Chat>;

@Schema({ timestamps: true })
export class Chat {
  @Prop()
  _id: string;

  @Prop()
  members: string[];
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
