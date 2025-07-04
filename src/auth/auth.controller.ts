import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { SignInUserDto } from './dto/sign-in-user.dto';
import { Public } from './decorators/is-public.decorator';
import { UserDto } from 'src/user/dto/user.dto';
import { AccessTokenDto } from './dto/access-token.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('sign-up')
  @Public()
  @Serialize(UserDto)
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto);
  }

  @Post('sign-in')
  @Public()
  @Serialize(AccessTokenDto)
  async signIn(@Body() signInDto: SignInUserDto) {
    return await this.authService.signIn(signInDto);
  }
}
