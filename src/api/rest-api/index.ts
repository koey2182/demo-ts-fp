import express from 'express';
import routes from './routes';

export default function restApi() {
    const restApi = express.Router();

    Object.entries(routes).forEach(([path, router]) => restApi.use(path, router));

    return restApi;
}
