import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactsService {
    constructor(private prisma: PrismaService) { }

    async findOne(id: string) {
        const contact = await this.prisma.contact.findUnique({ where: { id } });
        if (!contact) throw new NotFoundException('Contact not found');
        return contact;
    }

    create(dto: CreateContactDto) {
        return this.prisma.contact.create({ data: dto });
    }

    findAll() {
        return this.prisma.contact.findMany();
    }
}

