import { gql } from 'apollo-server';

export default gql`
    extend type Query {
        posts: [Post!]!
    }
    type Post {
        id: ID!
        body: String
        username: String
        createdAt: String
    }
`;