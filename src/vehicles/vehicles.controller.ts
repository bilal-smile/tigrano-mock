import { Controller, Get } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';

@Controller('vehicles')
export class VehiclesController {
  constructor(private vehiclesService: VehiclesService) {}
  @Get()
  findAll(): Array<any> {
    return this.vehiclesService.findAll();
  }
}
