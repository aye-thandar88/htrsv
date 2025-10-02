import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactsService {
    constructor(private prisma: PrismaService) { }

    create(dto: CreateContactDto) {
        return this.prisma.contact.create({ data: dto });
    }

    findAll() {
        return this.prisma.contact.findMany();
    }
}

