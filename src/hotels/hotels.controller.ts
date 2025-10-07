import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('hotels')
export class HotelsController {
    constructor(private hotelsService: HotelsService) { }

    @Get()
    async findAll() {
        return await this.hotelsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.hotelsService.findOne(id);
    }

    @Post()
    async create(@Body() dto: CreateHotelDto) {
        return await this.hotelsService.create(dto);
    }

    @Post('many')
    async insertMany(@Body() dto: CreateHotelDto[]) {
        return await this.hotelsService.insertMany(dto);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() dto: UpdateHotelDto) {
        return await this.hotelsService.update(id, dto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.hotelsService.remove(id);
        return { message: 'Deleted successfully' };
    }
}
