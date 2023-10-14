import { Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './services/auth.service';
import { DatabaseModule } from 'src/config/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
