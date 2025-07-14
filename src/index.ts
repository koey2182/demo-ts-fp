import { createApp, run } from './api/app';
import { config } from 'dotenv';

const port = parseInt(process.env.PORT ?? '80');

createApp().then((app) => {
    run(app, { port });
});
