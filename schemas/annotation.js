const { gql } = require('apollo-server');

const typeDefs = gql`
    type Annotation {
        _id: String!
        id: String!
        author: User!
        content: String!
        likes: [String]
        laughs: [String]
        loves: [String]
    }
    extend type Query {
        annotationsByUser(uid: String!): [Annotation]
    }
    input annotationInput {
        anid: String!
        content: String!
    }
    extend type Mutation {
        toogleVotes(id: String!, type: String!): Boolean!
        deleteAnnotation(aid: String!, qid: String!): Boolean!
    }`;

module.exports = {
    typeDefs: typeDefs,
}