import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Welcome to the Todo API!'; // You can return any message or object here
  }
}
