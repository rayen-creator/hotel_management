import { Module } from '@nestjs/common';

@Module({
    imports:[
        // EurekaModule.forRoot({
        //     disable: false,
        //     disableDiscovery: false,
        //     eureka: {
        //         host: process.env.EUREKA_HOST || 'eureka-server',
        //         port: process.env.EUREKA_PORT || 80,
        //         servicePath: '/eureka/apps',
        //         maxRetries: 10,
        //         requestRetryDelay: 10000,
        //     },
        //     service: {
        //         name: 'nest-service',
        //         port: parseInt(process.env.APP_PORT) || 3000,
        //     },
        // }),
    ],
    exports:[
            // EurekaModule.forRoot({
        //     disable: false,
        //     disableDiscovery: false,
        //     eureka: {
        //         host: process.env.EUREKA_HOST || 'eureka-server',
        //         port: process.env.EUREKA_PORT || 80,
        //         servicePath: '/eureka/apps',
        //         maxRetries: 10,
        //         requestRetryDelay: 10000,
        //     },
        //     service: {
        //         name: 'nest-service',
        //         port: parseInt(process.env.APP_PORT) || 3000,
        //     },
        // }),
    ]
})
export class EurekaModule {}
