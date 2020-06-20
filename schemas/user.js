const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        _id: String!
        id: String!
        authid: String!
        firstName: String!
        lastName: String!
        email: String!
        annotations: [Annotation]
    }
    extend type Query {
        loggedInUser : User
        # get user by id
        user(id: String!) : User
    }
    extend type Mutation {
        logout : Boolean
    }`;

module.exports = {
    typeDefs: typeDefs,
}