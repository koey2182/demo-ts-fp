import { nonNull, queryField } from 'nexus';

export const HelloWorldQuery = queryField('hello', {
    type: nonNull('String'),
    description: '"hello, world!"를 반환합니다.',
    resolve: async (src, args, ctx, info) => {
        return 'hello, world!';
    },
});
