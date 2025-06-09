import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { schema } from './api/schema';
import { PrismaClient } from './generated/prisma';

type Context = {
    prisma: PrismaClient;
};

const prisma = new PrismaClient();

const server = new ApolloServer<Context>({
    schema,
});

startStandaloneServer<Context>(server, {
    listen: { port: 4000 },
    context: async (): Promise<Context> => ({ prisma }),
}).then(({ url }) => console.log(`Server ready at: ${url}`));
