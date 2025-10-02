import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Injectable()
export class HotelsService {
    constructor(private prisma: PrismaService) { }

    findAll() {
        return this.prisma.hotel.findMany();
    }

    async findOne(id: string) {
        const hotel = await this.prisma.hotel.findUnique({ where: { id } });
        if (!hotel) throw new NotFoundException('Hotel not found');
        return hotel;
    }

    create(dto: CreateHotelDto) {
        return this.prisma.hotel.create({ data: dto });
    }

    update(id: string, dto: UpdateHotelDto) {
        return this.prisma.hotel.update({ where: { id }, data: dto });
    }

    remove(id: string) {
        return this.prisma.hotel.delete({ where: { id } });
    }
}
