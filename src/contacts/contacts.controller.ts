import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contacts')
export class ContactsController {
    constructor(private contactsService: ContactsService) { }

    @Post()
    create(@Body() dto: CreateContactDto) {
        return this.contactsService.create(dto);
    }

    @Get()
    findAll() {
        return this.contactsService.findAll();
    }
}
