import { Injectable } from '@nestjs/common';
import { getRoles } from './roles.data';

@Injectable()
export class RolesService {
  private readonly roles = getRoles();
  findAll() {
    return this.roles;
  }
}
