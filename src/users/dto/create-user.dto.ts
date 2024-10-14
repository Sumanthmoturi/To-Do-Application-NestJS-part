import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString() @IsNotEmpty() name: string;
  @IsString() @IsNotEmpty() mobile: string;
  @IsString() @IsNotEmpty() gender: string;
  @IsString() @IsNotEmpty() country: string;
  @IsEmail() email: string;
  @IsString() @IsNotEmpty() password: string;
}
