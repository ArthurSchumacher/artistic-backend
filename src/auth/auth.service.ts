import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SignInUserDto } from './dto/sign-in-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) { }

    async signUp(createUserDto: CreateUserDto) {
        const user = await this.userService.findOneByEmail(createUserDto.email);
        if (user) {
            throw new BadRequestException('Email must be unique.');
        }

        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(createUserDto.password, salt);

        const userToCreate: CreateUserDto = {
            ...createUserDto,
            password: hash,
        };

        return await this.userService.create(userToCreate);
    }

    async signIn({ email, password }: SignInUserDto) {
        const user = await this.userService.findOneByEmail(email);
        if (!user) {
            throw new UnauthorizedException('Invalid credentials.');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new UnauthorizedException('Invalid credentials.');
        }

        const payload = {
            username: user.email,
            role: user.role,
        };

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
