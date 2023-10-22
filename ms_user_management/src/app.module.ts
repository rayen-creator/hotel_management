import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database/database.module';
import { DotenvModule } from './config/dotenv/dotenv.module';
import { AuthModule } from './module/auth/auth.module';
import { UserModule } from './module/user/user.module';
import { SharedModule } from './module/shared/shared.module';
import { EurekaconfigModule } from './config/eurekaconfig/eurekaconfig.module';

@Module({
  imports: [
    DatabaseModule,
    DotenvModule,
    AuthModule,
    UserModule,
    SharedModule,
    // EurekaconfigModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
