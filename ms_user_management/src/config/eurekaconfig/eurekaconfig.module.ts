import { Module } from '@nestjs/common';
import { EurekaModule } from 'nestjs-eureka';

@Module({
    imports: [
        EurekaModule.forRoot({
            disable: false,
            disableDiscovery: false,
            eureka: {
                host: "localhost",
                port: 8761,
                servicePath: '/eureka/apps/',
                maxRetries: 10,
                requestRetryDelay: 10000,
            },
            service: {
                host: "localhost",
                name: 'ms_user_management',
                port: 7000,
            },
        }),
    ],
})
export class EurekaconfigModule { }
