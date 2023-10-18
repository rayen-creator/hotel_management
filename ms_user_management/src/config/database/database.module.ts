import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/user.model';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => (configService.get('typeorm'))
        }),
        TypeOrmModule.forFeature([User])
    ],
    exports: [TypeOrmModule.forFeature([User])
    ]
}) export class DatabaseModule { }