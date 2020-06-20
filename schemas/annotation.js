const { gql } = require('apollo-server');

const typeDefs = gql`
    enum AnnType {
        CORRECT
        DOUBT
        ERROR
    }
    type Annotation {
        _id: String!
        id: String!
        type: AnnType!
        title: String!
        content: String!
        reference: String
        author: User!
        created: String!
        likes: [String]
        loves: [String]
        smiles: [String]
    }
    extend type Query {
        annotationsByUser(uid: String!): [Annotation]
    }
    input annotationInput {
        anid: String!
        type: AnnType!
        title: String!
        content: String!
        reference: String
    }
    extend type Mutation {
        toogleReaction(id: String!, type: String!): Boolean!
        deleteAnnotation(aid: String!, qid: String!): Boolean!
    }`;

module.exports = {
    typeDefs: typeDefs,
}