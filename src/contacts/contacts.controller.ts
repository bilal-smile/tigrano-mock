import { Controller, Get } from '@nestjs/common';
import { ContactsService } from './contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private contactService: ContactsService) {}
  @Get()
  findAll(): Array<any> {
    return this.contactService.findAll();
  }
}
