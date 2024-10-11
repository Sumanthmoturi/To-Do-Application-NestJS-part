


import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users') // This will prefix all routes in this controller with /users
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register') // This will handle POST requests to /users/register
  register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('login') // This will handle POST requests to /users/login
  login(@Body() body: { mobile: string; password: string }) {
    return this.usersService.login(body.mobile, body.password);
  }
}
