import { Controller, Get } from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {

  constructor(private rolesService: RolesService) { }

  @Get()
  findAll(): Array<any> {
      return this.rolesService.findAll();
  }

}
