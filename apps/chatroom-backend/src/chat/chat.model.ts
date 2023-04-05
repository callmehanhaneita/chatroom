import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

// enum ChatType {
//   DIRECT_CHAT,
//   GROUP_CHAT,
// }
//
// registerEnumType(ChatType);

@ObjectType({ description: 'chat' })
export class Chat {
  @Field((type) => ID)
  id: string;

  @Field((type) => String)
  type: string;

  @Field((type) => String)
  name: string;

  @Field((type) => [Member])
  members: Member[];

  @Field(() => [Message])
  messages: Message[];
}

@ObjectType({ description: 'member' })
class Member {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  avatar: string;
}

@ObjectType({ description: 'message' })
class Message {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  from: string;

  @Field(() => String, { nullable: true })
  toGroup?: string;

  @Field(() => String, { nullable: true })
  toMember?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => String)
  content: string;
}
