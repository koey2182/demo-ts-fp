import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { schema } from './schema';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Context, createContext } from './context';
import http from './http';

export const createApp = async () => {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());

    const server = new ApolloServer<Context>({ schema });
    await server.start();

    app.use('/api', http());

    app.use(
        '/graphql',
        expressMiddleware(server, {
            context: createContext,
        }),
    );

    return app;
};
