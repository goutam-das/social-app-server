import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import { typeDefs, resolvers } from './schema';

(async () => {
    try {
        const server = new ApolloServer({
            typeDefs,
            resolvers
        });
        await mongoose.connect('mongodb://127.0.0.1:27017/merng', { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('MongoDB Connected!');
        // The listen method lanches a web server
        const { url } = await server.listen();
        console.log(`Server ready at ${url}`);
    } catch (error) {
        console.error(error);
    }
})();