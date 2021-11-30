import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('ANY_SERVICE') private client: ClientProxy,
  ) {}

  @Get()
  getHello(): string {
    this.client.emit('any_event', {
      message: 'Lorem ipsum dolor sit amet',
      timestamp: new Date().getTime(),
    });
    return this.appService.getHello();
  }
}
