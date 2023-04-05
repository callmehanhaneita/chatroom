import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { DirectChat } from './direct-chat.model';
import { MessageService } from '../message/message.service';
import { MemberService } from '../member/member.service';

@Resolver((of) => DirectChat)
export class DirectChatResolver {
  constructor(
    private messageService: MessageService,
    private memberService: MemberService,
  ) {}

  @Query((returns) => [DirectChat])
  async directChats(
    @Args('memberId', { type: () => String }) memberId: string,
  ) {
    const chats = await this.messageService.findByMemberId({ memberId });
    console.log('hhhhh222', chats);
    // [ { _id: '642d04fdbd473f3c5434a4d7', messages: [ [Object] ] } ]
    return chats;
  }

  @ResolveField()
  async with(@Parent() chat: DirectChat) {
    console.log('with', chat.id);
    return this.memberService.findById({
      memberId: chat.id,
    });
  }
}
