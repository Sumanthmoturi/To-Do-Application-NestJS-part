import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller'; // Your existing controller
import { UsersService } from './users/users.service'; // Your existing service
import { AppController } from './app.controller'; // Import the new controller

@Module({
  imports: [],
  controllers: [AppController, UsersController], // Add AppController here
  providers: [UsersService],
})
export class AppModule {}
