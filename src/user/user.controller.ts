import { Controller, Get, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dto/user.dto';
import { UserDetailsDto } from './dto/user-details.dto';
import { AdminGuard } from 'src/auth/guards/admin.guard';

@Controller('user')
@UseGuards(AdminGuard)
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  @Serialize(UserDto)
  async findAll() {
    try {
      return await this.userService.findAll();
    } catch (error) {
      throw error;
    }
  }

  @Get(':uuid')
  @Serialize(UserDetailsDto)
  async findOne(@Param('uuid') uuid: string) {
    try {
      return await this.userService.findOne(uuid);
    } catch (error) {
      throw error;
    }
  }

  @Patch(':uuid')
  @Serialize(UserDetailsDto)
  async update(@Param('uuid') uuid: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      return await this.userService.update(uuid, updateUserDto);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':uuid')
  @Serialize(UserDto)
  async remove(@Param('uuid') uuid: string) {
    try {
      return await this.userService.remove(uuid);
    } catch (error) {
      throw error;
    }
  }
}
