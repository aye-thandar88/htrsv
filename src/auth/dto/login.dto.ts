import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
    @IsEmail()
    @ApiProperty({ example: 'hello@gmail.com' })
    email: string;

    @IsString()
    @ApiProperty({ example: 'hello123' })
    password: string;
}