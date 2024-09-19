import { env } from '@/env';
import paths from '@/open-api';
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'eCommerce Express API',
            version: '1.0.0',
            description: 'An Express API with Swagger documentation'
        },
        paths: paths,
        servers: [
            {
                url: `http://localhost:${env.PORT}`
            }
        ]
    },
    apis: ['../routes/*.ts']
};

export const swaggerDocument = swaggerJSDoc(options);
