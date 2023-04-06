import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';

// enum ChatType {
//   DIRECT_CHAT,
//   GROUP_CHAT,
// }
//
// registerEnumType(ChatType);

@ObjectType({ description: 'chat' })
export class Chat {
  @Field((type) => ID, { name: 'id' })
  _id: string;

  @Field((type) => String)
  name: string;

  @Field((type) => [Member])
  members: Member[];

  @Field(() => [Message])
  messages: Message[];
}

@ObjectType({ description: 'member' })
class Member {
  @Field(() => ID, { name: 'id' })
  _id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  avatar: string;
}

@ObjectType({ description: 'message' })
class Message {
  @Field(() => ID, { name: 'id' })
  _id: string;

  @Field(() => String)
  from: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => String)
  content: string;
}
