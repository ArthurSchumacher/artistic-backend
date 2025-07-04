import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    if (users.length === 0) {
      throw new NotFoundException("Users not found.")
    }

    return users;
  }

  async findOne(uuid: string): Promise<User> {
    const user = await this.userModel.findOne({ uuid }).exec();
    if (!user) {
      throw new NotFoundException("User not found.");
    }
    return user;
  }

  async findOneByEmail(email: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email: email }).exec();
    return user;
  }

  async update(uuid: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.userModel.findOneAndUpdate({uuid}, updateUserDto).exec();
    if (!updatedUser) {
      throw new NotFoundException("User not found.");
    }

    await updatedUser.save();

    return await this.findOne(updatedUser.uuid);
  }

  async remove(uuid: string): Promise<User> {
    const user = await this.userModel.findOneAndDelete({ uuid }).exec();
    if (!user) {
      throw new NotFoundException(`User with uuid: ${uuid} not found`);
    }
    return user;
  }
}
