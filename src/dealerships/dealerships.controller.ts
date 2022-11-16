import { Controller, Get } from '@nestjs/common';
import { DealershipsService } from './dealerships.service';

@Controller('dealerships')
export class DealershipsController {
  
  constructor(private dealershipsService: DealershipsService) { }

  @Get()
  findAll(): Array<any> {
      return this.dealershipsService.findAll();
  }

}
