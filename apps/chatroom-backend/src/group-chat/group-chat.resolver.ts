import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GroupChat } from './group-chat.model';
import { GroupChatService } from './group-chat.service';
import { MemberService } from '../member/member.service';
import { MessageService } from '../message/message.service';
import { DirectChat } from '../direct-chat/direct-chat.model';

@Resolver((of) => GroupChat)
export class GroupChatResolver {
  constructor(
    private chatService: GroupChatService,
    private memberService: MemberService,
    private messageService: MessageService,
  ) {}

  @Query((returns) => [GroupChat])
  async groupChats(@Args('memberId', { type: () => String }) memberId: string) {
    return this.chatService.findByMemberId({ memberId });
  }
  @ResolveField()
  async members(@Parent() chat: GroupChat) {
    return this.memberService.findMembersIn({
      memberIds: chat.members.map((member) => member.id),
    });
  }

  @ResolveField()
  async messages(@Parent() chat: GroupChat) {
    return this.messageService.findByChatId({
      chatId: chat.id,
    });
  }
}
