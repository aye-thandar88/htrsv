import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateContactDto {
    @ApiProperty({ example: 'Hello' })
    @IsString() name: string;

    @ApiProperty({ example: 'hello@gmail.com' })
    @IsEmail() email: string;

    @ApiProperty({ example: 'hello hello!' })
    @IsString() message: string;
}
