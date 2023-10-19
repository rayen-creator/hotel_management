import { Module } from '@nestjs/common';
import { EurekaModule } from 'nestjs-eureka';

@Module({
    imports: [
        EurekaModule.forRoot({
            disable: false,
            disableDiscovery: false,
            eureka: {
                host: process.env.EUREKA_HOST,
                port: process.env.EUREKA_PORT,
                servicePath: process.env.EUREKA_SEVERPATH,
                maxRetries: 10,
                requestRetryDelay: 10000,
            },
            service: {
                name: 'Msusermanagement',
                port: 7000,
            },
        }),
    ],
})
export class EurekaconfigModule { }
