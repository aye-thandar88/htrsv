import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateHotelDto {
    @ApiProperty({ example: 'hello' })
    @IsString() name: string;

    @ApiProperty({ example: 'Yangon' })
    @IsString() address: string;

    @ApiProperty({ example: '09123456789' })
    @IsOptional() @IsString() phone?: string;

    @ApiProperty({ example: '' })
    @IsOptional() @IsString() image?: string;

    @ApiProperty({ example: '5' })
    @IsOptional() @IsNumber() rating?: number;
}
