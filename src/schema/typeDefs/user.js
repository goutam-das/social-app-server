import { gql } from 'apollo-server';

export default gql`
    type User {
        id: ID!
        username: String!
        token: String!
        email: String!
        createdAt: String!
    }

    input RegisterInput {
        username: String!
        password: String!
        email: String!
    }

    extend type Mutation {
        register(registerInput: RegisterInput!): User!
    }
`;