import { createApp, run } from './api/app';
import { config } from 'dotenv';

const port = parseInt(process.env.PORT ?? '3000');

createApp().then((app) => {
    run(app, { port });
});
