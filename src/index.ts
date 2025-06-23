import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { schema } from './api/schema';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Context, createContext } from './api/context';

const createApp = async () => {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());

    const server = new ApolloServer<Context>({ schema });
    await server.start();

    // app.use('/api', http());

    app.use(
        '/graphql',
        expressMiddleware(server, {
            context: createContext,
        }),
    );

    return app;
};

const port = 4000;

createApp().then((app) => {
    app.listen(port, () => {
        console.log(`🚀 GraphQL ready at http://localhost:${port}/graphql`);
        console.log(`🌍 RESTful API ready at http://localhost:${port}/api`);
    });
});
