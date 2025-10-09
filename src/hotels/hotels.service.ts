import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';

@Injectable()
export class HotelsService {
    constructor(private prisma: PrismaService) { }

    findAll() {
        return this.prisma.hotel.findMany({ include: { packages: true } });
    }

    async findOne(id: string) {
        const hotel = await this.prisma.hotel.findUnique({ where: { id }, include: { packages: true } });
        if (!hotel) throw new NotFoundException('Hotel not found');
        return hotel;
    }

    async create(dto: CreateHotelDto) {
        const { packageIds = [], ...data } = dto;

        return this.prisma.hotel.create({
            data: {
                ...data,
                packages: {
                    connect: packageIds.map(id => ({ id })), // connect packages
                },
            },
            include: { packages: true },
        });
    }

    insertMany(dto: CreateHotelDto[]) {
        return this.prisma.hotel.createMany({ data: dto, skipDuplicates: true });
    }

    async update(id: string, dto: UpdateHotelDto) {
        const { packageIds, ...updateData } = dto;
        await this.findOne(id);
        return this.prisma.hotel.update({
            where: { id },
            data: {
                ...updateData,
                packages: packageIds
                    ? {
                        set: packageIds.map(pid => ({ id: pid })), // replace all current connections
                    }
                    : undefined,
            },
            include: { packages: true },
        });
    }

    async remove(id: string) {
        await this.findOne(id);
        return this.prisma.hotel.delete({ where: { id } });
    }
}
