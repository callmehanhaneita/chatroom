import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'member' })
export class Member {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  avatar: string;
}
