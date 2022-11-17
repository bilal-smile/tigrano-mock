import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { User, NewUser, UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }
    @Get()
    findAll(): Array<any> {
        return this.userService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string): any {
        return this.userService.findOne(id);
    }
    
    @Post()
    create(@Body() user: NewUser): object {
        return this.userService.create(user);
    }

    @Delete(':id')
    delete(@Param('id') id: string): string {
        return this.userService.delete(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() user: User): object {
        return this.userService.update(user);
    }
}
