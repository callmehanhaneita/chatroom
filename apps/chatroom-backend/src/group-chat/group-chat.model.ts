import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Member } from '../member/member.model';
import { Message } from '../message/message.model';
@ObjectType({ description: 'group-chat' })
export class GroupChat {
  @Field((type) => ID)
  id: string;

  @Field((type) => [Member])
  members: Member[];

  @Field(() => [Message])
  messages: Message[];
}
