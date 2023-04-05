import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Message } from '../message/message.model';
import { Member } from '../member/member.model';

@ObjectType({ description: 'direct-chat' })
export class DirectChat {
  @Field(() => ID)
  id: string;

  @Field(() => Member)
  with: Member;

  @Field(() => [Message])
  messages: Message[];
}
