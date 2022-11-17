import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { getDealerships } from 'src/dealerships/dealerships.data';
import { getRoles } from '../roles/roles.data';

export class NewUser {
  @ApiProperty()
  first_name: string;
  @ApiProperty()
  last_name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  role: string;
  @ApiProperty()
  dealership: string[];
}

export class User {
  @ApiProperty()
  id: number;
  @ApiProperty()
  first_name: string;
  @ApiProperty()
  last_name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  role: string;
  @ApiProperty()
  dealership: string[];
}

@Injectable()
export class UsersService {
  private readonly roles = getRoles();
  private readonly dealerships = getDealerships();
  private readonly users = [
    {
      id: 1,
      first_name: 'Jules',
      last_name: 'Jayet',
      email: 'jules.jayet@smile.fr',
      role: this.roles[0],
      dealership: [this.dealerships[0], this.dealerships[1]],
    },
    {
      id: 2,
      first_name: 'Bilal',
      last_name: 'Kramdi',
      email: 'bilal.kramdi@smile.fr',
      role: this.roles[1],
      dealership: [this.dealerships[1]],
    },
    {
      id: 3,
      first_name: 'Sara',
      last_name: 'Aouita',
      email: 'sara.aouita@smile.fr',
      role: this.roles[1],
      dealership: [this.dealerships[1]],
    },
  ];

  findAll() {
    return this.users;
  }
  findOne(id: string) {
    return this.users.filter((user: any) => user.id === parseInt(id));
  }
  create(user: NewUser) {
    return {
      id: 4,
      first_name: 'Toto',
      last_name: 'Tata',
      email: 'toto.tata@smile.fr',
      role: this.roles[1],
      dealership: [this.dealerships[1]],
    }
  }
  delete(userId: string) {
    return 'Deleted';
  }
  update(user: User) {
    return {
      id: 4,
      first_name: 'Toto',
      last_name: 'Tata',
      email: 'toto.tata@smile.fr',
      role: this.roles[1],
      dealership: [this.dealerships[1]],
    }
  }
}
