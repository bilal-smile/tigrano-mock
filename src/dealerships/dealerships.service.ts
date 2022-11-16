import { Injectable } from '@nestjs/common';
import { getDealerships } from './dealerships.data';

@Injectable()
export class DealershipsService {
  private readonly dealerships = getDealerships();
  findAll() {
    return this.dealerships;
  }
}
