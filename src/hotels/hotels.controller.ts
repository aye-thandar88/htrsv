import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Controller('hotels')
export class HotelsController {
    constructor(private hotelsService: HotelsService) { }

    @Get()
    findAll() {
        return this.hotelsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.hotelsService.findOne(id);
    }

    @Post()
    create(@Body() dto: CreateHotelDto) {
        return this.hotelsService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateHotelDto) {
        return this.hotelsService.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.hotelsService.remove(id);
    }
}
