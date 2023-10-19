import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controller/user.controller';
import { DatabaseModule } from 'src/config/database/database.module';

@Module({
  imports:[DatabaseModule],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
