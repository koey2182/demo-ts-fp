import { createApp } from './api/app';

const port = 4000;

createApp().then((app) => {
    app.listen(port, () => {
        console.log(`🚀 GraphQL ready at http://localhost:${port}/graphql`);
        console.log(`🌍 RESTful API ready at http://localhost:${port}/api`);
    });
});
