import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';

@Injectable()
export class PackagesService {
    constructor(private prisma: PrismaService) { }

    async create(dto: CreatePackageDto) {
        // Ensure hotel exists
        const hotel = await this.prisma.hotel.findUnique({
            where: { id: dto.hotelId },
        });
        if (!hotel) throw new NotFoundException('Hotel not found');

        return this.prisma.package.create({ data: dto });
    }

    async findAll() {
        return this.prisma.package.findMany({
            include: { hotel: { select: { name: true, address: true } } },
        });
    }

    async findOne(id: string) {
        const pkg = await this.prisma.package.findUnique({
            where: { id },
            include: { hotel: true },
        });
        if (!pkg) throw new NotFoundException('Package not found');
        return pkg;
    }

    async update(id: string, dto: UpdatePackageDto) {
        await this.findOne(id);
        return this.prisma.package.update({ where: { id }, data: dto });
    }

    async remove(id: string) {
        await this.findOne(id);
        return this.prisma.package.delete({ where: { id } });
    }
}

