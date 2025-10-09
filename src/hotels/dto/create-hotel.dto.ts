import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsOptional, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { CreatePackageDto } from 'src/packages/dto/create-package.dto';

export class CreateHotelDto {
    @ApiProperty({ example: 'hello' })
    @IsString() name: string;

    @ApiProperty({ example: '' })
    @IsOptional() @IsString() description?: string;

    @ApiProperty({ example: 'Yangon' })
    @IsString() address: string;

    @ApiProperty({ example: '09123456789' })
    @IsOptional() @IsString() phone?: string;

    @ApiProperty({ example: '' })
    @IsOptional() @IsString() image?: string;

    @ApiProperty({ example: '' })
    @IsOptional() @IsString() package?: string;

    @ApiProperty({ example: 20 })
    @IsOptional() @IsNumber() discount?: number;

    @ApiProperty({ example: 5 })
    @IsOptional() @IsNumber() rating?: number;

    @ApiProperty({ example: ["package-id-1", "package-id-2"]}) 
    @IsOptional() @IsArray() packageIds?: string[];
}
