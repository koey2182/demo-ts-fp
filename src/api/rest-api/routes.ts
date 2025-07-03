import { Router } from 'express';
import { router as helloRouter } from './hello';

const routes: { [k: string]: Router } = {
    '/hello': helloRouter,
};

export default routes;
