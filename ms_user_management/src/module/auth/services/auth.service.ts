import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/module/user/services/user.service';

@Injectable()
export class AuthService {

  constructor(private jwtService: JwtService, private usersService: UserService) { }

  async validateUser(username: string, password: string) {

    const user = await this.usersService.findByUsername(username);
    console.log("user",user)
    const isMatch = await bcrypt.compare(password, user.password);
    if (user && isMatch) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }

}
