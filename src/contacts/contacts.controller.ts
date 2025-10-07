import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contacts')
export class ContactsController {
    constructor(private contactsService: ContactsService) { }

    @Post()
    async create(@Body() dto: CreateContactDto) {
        return await this.contactsService.create(dto);
    }

    @Get()
    async findAll() {
        return await this.contactsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.contactsService.findOne(id);
    }
}
