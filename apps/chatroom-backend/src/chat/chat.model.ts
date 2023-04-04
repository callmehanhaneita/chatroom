import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Member } from '../member/member.model';
import { Message } from '../message/message.model';

@ObjectType({ description: 'chat' })
export class Chat {
  @Field((type) => ID)
  id: string;

  @Field((type) => [Member])
  members: Member[];

  @Field(() => [Message])
  messages: Message[];
}
