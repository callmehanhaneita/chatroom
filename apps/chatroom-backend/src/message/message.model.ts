import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'message' })
export class Message {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  from: string;

  @Field((type) => Date, { name: 'sentAt' })
  sentAt: Date;

  @Field(() => String)
  content: string;
}
