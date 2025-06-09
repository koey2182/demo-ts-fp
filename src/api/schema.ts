import { makeSchema } from 'nexus';
import * as types from './graphql';

export const schema = makeSchema({
    types,
});
