import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

import { Server } from 'socket.io';
import { EventService } from './event.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventGateway implements OnGatewayInit, OnGatewayConnection {
  constructor(private eventService: EventService) {}

  @WebSocketServer()
  server: Server;

  afterInit(server) {
    console.log('server is inited');
  }

  handleConnection(@ConnectedSocket() client: Socket, ...args: any[]): any {
    console.log(client.handshake.auth.clientId, 'is connected1');
  }

  @SubscribeMessage('DIRECT_MESSAGE')
  handleMessage(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    this.eventService.addDirectMessage(data);
    // this.server.emit('message', {
    //   hello: 'everyone',
    // });
  }
}
