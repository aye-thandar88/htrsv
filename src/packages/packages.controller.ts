import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PackagesService } from './packages.service';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';

@Controller('packages')
export class PackagesController {
    constructor(private readonly packagesService: PackagesService) { }

    @Post()
    create(@Body() dto: CreatePackageDto) {
        return this.packagesService.create(dto);
    }

    @Get()
    findAll() {
        return this.packagesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.packagesService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdatePackageDto) {
        return this.packagesService.update(id, dto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.packagesService.remove(id);
         return { message: 'Deleted successfully' };
    }
}

