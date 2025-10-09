import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsUUID } from 'class-validator';

export class CreatePackageDto {
  @ApiProperty({ example: '' })
  @IsUUID() hotelId: string;

  @ApiProperty({ example: 'hello' })
  @IsString() name: string;

  @ApiProperty({ example: '' })
  @IsOptional() @IsString() description?: string;

  @ApiProperty({ example: '' })
  @IsNumber() price: number;

  @ApiProperty({ example: '' })
  @IsOptional() @IsNumber() discount?: number;
}
