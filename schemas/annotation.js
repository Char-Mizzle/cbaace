const { gql } = require('apollo-server');

const typeDefs = gql`
    scalar Date
    enum AnnType {
        CORRECT
        WARNING
        FALSE
    }

    type Annotation {
        _id: String!
        id: String!

        author: User!
        type: AnnType
        quote: String!
        title: String!
        content: String!
        reference: String
        created: Date
        UsersLiked: [String]
        UsersHearted: [String]
        UsersSmiled: [String]
    }
    extend type Query {
        annotationsByUser(uid: String!): [Annotation]
    }
    input annotationInput{
        anid: String!
        content: String!
    }
    extend type Mutation {
        toogleReaction(id: String!, isUpvote: Boolean!): Boolean!
        deleteAnnotation(aid: String!, qid: String!): Boolean!
    }`;

module.exports = {
    typeDefs: typeDefs,
}