import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app) {
    const config = new DocumentBuilder()
        .setTitle('Open Source API')
        .setDescription('Open Source API built with Nest JS & Sequelize, this api contain all general data, for learning purpose or test your frontend app.')
        .setVersion('1.0')
        .setContact('Muhammad Ichsanul Fadhil', 'https://muhammadichsan.com', 'ichsanfadhil67@gmail.com')
        .setBasePath('https://ichsan-nestapi.cyclic.app')
        .setExternalDoc('Github Repository', 'https://github.com/ichsanputr/nest-api')
        .addBearerAuth({
            type: 'http',
            name: 'jwt_token',
            bearerFormat: 'JWT',
            in: 'header',
            description: 'put your token',
            scheme: 'bearer'
        }, 'jwtToken')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document, {
        swaggerOptions: {
            tagsSorter: 'alpha'
        }
    });
}