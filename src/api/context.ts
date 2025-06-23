import { PrismaClient } from '../generated/prisma';

export type Context = {
    prisma: PrismaClient;
};

const prisma = new PrismaClient();

export const createContext = async (): Promise<Context> => ({ prisma });
