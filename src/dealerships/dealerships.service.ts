import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { getDealerships } from './dealerships.data';

export class Dealership {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
}

@Injectable()
export class DealershipsService {
  private readonly dealerships = getDealerships();
  findAll() {
    return this.dealerships;
  }
}
