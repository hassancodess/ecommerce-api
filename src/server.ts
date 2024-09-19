import cors from 'cors';
import express from 'express';
import { routes } from './routes';
import { env } from './env';
import helmet from 'helmet';
import tooBusyMiddleware from './middlewares/toobusy';
import rateLimiter from './middlewares/rateLimiter';
import swaggerUI from 'swagger-ui-express';
import { swaggerDocument } from './lib/swagger';
import '@dotenvx/dotenvx';

const numberOfProxies = 1;
const app = express();
app.set('trust proxy', numberOfProxies);

// Middlewares
app.use(cors());
app.use(helmet());
app.use(tooBusyMiddleware);
app.use(rateLimiter);

// API
app.use('/api', routes);
if (env.NODE_ENV != 'production') {
    app.use(
        '/docs',
        swaggerUI.serve,
        swaggerUI.setup(swaggerDocument, {
            customCss: '.swagger-ui .topbar { display: none }'
        })
    );
}

app.get('/', (req, res) => res.send('Server is running!'));

app.listen(env.PORT, () => {
    console.log(`App listening on port: ${env.PORT}`);
});
