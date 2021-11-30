import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private counter = 0;

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('any_event')
  getNotifications(@Payload() data: any, @Ctx() context: RmqContext) {
    this.counter++;
    console.log(`Counter: ${this.counter}`);
    console.log(`Pattern: ${context.getPattern()}`);
    console.log(`Content: ${JSON.stringify(data)}`);
  }
}
