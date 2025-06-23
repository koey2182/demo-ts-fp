import express from 'express';
import routes from './routes';

export default function http() {
    const http = express.Router();

    Object.entries(routes).forEach(([path, router]) => http.use(path, router));

    return http;
}
