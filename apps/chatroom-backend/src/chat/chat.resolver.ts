import { Args, Query, Resolver } from '@nestjs/graphql';
import { Chat } from './chat.model';
import { ChatService } from './chat.service';

@Resolver((of) => Chat)
export class ChatResolver {
  constructor(private chatService: ChatService) {}

  @Query((returns) => [Chat])
  async chats(@Args('memberId', { type: () => String }) memberId: string) {
    return this.chatService.findByMemberId({ memberId });
  }
}
