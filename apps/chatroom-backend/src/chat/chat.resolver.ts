import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Chat } from './chat.model';
import { ChatService } from './chat.service';
import { MemberService } from '../member/member.service';
import { MessageService } from '../message/message.service';

@Resolver((of) => Chat)
export class ChatResolver {
  constructor(
    private chatService: ChatService,
    private memberService: MemberService,
    private messageService: MessageService,
  ) {}

  @Query((returns) => [Chat])
  async chats(@Args('memberId', { type: () => String }) memberId: string) {
    return this.chatService.findByMemberId({ memberId });
  }
  @ResolveField()
  async members(@Parent() chat: Chat) {
    return this.memberService.findMembersIn({
      memberIds: chat.members.map((member) => member.id),
    });
  }

  @ResolveField()
  async messages(@Parent() chat: Chat) {
    return this.messageService.findByChatId({
      chatId: chat.id,
    });
  }
}
