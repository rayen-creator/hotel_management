import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from '../guard/local-auth.guard';
import { Public } from '../../../decorator/public.decorator';
import { AuthService } from '../services/auth.service';
import { SigninDTO } from '../dto/signin-auth.dto';

@Public()
@ApiTags("auth")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("/signin")
  async login(@Body() user:SigninDTO) {
    return await this.authService.login(user);
  }

  
}
