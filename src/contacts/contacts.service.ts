import { Injectable } from '@nestjs/common';
import { Contact } from './interfaces/contact.interface';

@Injectable()
export class ContactsService {
  private readonly contacts = [
    {
      brand: 'brand 1',
      icon: '',
      name: 'Jean',
      lastname: 'Valjean',
      number: '04 77 86 96 85',
      email: 'jean.valjean@hotmail.fr',
    },
    {
      brand: 'brand 2',
      icon: '',
      name: 'Louis',
      lastname: 'Doe',
      number: '04 77 41 45 85',
      email: 'louis.doe@hotmail.fr',
    },
    {
      brand: 'brand 3',
      icon: '',
      name: 'Louis',
      lastname: 'Doe',
      number: '04 77 41 45 85',
      email: 'louis.doe@hotmail.fr',
    },
  ] as Array<Contact>;
  findAll() {
    return this.contacts;
  }
}
