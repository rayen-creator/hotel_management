import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/module/user/services/user.service';
import { AuthLoginDto } from '../auth-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  // async login(AuthLoginDto: AuthLoginDto) {
  //   const user = await this.validateUser(AuthLoginDto);

  //   const payload = {
  //     userId: user.id,
  //   };

  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }

  // async getProfile(userId) {
  //   const user = await this.usersService.findOne(userId);
  //   return user;
  // }

  // async validateUser(AuthLoginDto: AuthLoginDto) {
  //   const { email, password } = AuthLoginDto;

  //   const user = await this.usersService.findByEmail(email);
  //   if (!(await user?.validatePassword(password))) {
  //     throw new UnauthorizedException();
  //   }
  //   return user;
  // }
}
