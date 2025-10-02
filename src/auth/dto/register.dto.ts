import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
    @IsEmail()
    @ApiProperty({ example: 'hello@gmail.com' })
    email: string;

    @IsString()
    @MinLength(6)
     @ApiProperty({ example: 'hello123' })
    password: string;
}