import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = [];

  create(createUserDto: CreateUserDto) {
    if (this.users.find(u => u.mobile === createUserDto.mobile)) {
      throw new Error('User already exists');
    }
    this.users.push(createUserDto);
    return 'User registered successfully';
  }

  login(mobile: string, password: string) {
    const user = this.users.find(u => u.mobile === mobile && u.password === password);
    if (!user) throw new NotFoundException('Invalid credentials');
    return { message: 'Login successful', user };
  }
}
