import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'message' })
export class Message {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  from: string;

  @Field(() => String, { nullable: true })
  toChat?: string;

  @Field(() => String, { nullable: true })
  toMember?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => String)
  content: string;
}
