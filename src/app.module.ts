import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { ContactsController } from './contacts/contacts.controller';
import { ContactsService } from './contacts/contacts.service';
import { VehiclesService } from './vehicles/vehicles.service';
import { VehiclesController } from './vehicles/vehicles.controller';
import { RolesController } from './roles/roles.controller';
import { DealershipsController } from './dealerships/dealerships.controller';
import { RolesService } from './roles/roles.service';
import { DealershipsService } from './dealerships/dealerships.service';


@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
    ContactsController,
    VehiclesController,
    RolesController,
    DealershipsController
  ],
  providers: [AppService, UsersService, ContactsService, RolesService, DealershipsService, VehiclesService],
})
export class AppModule { }
