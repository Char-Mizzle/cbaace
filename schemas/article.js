const { gql } = require('apollo-server');

const typeDefs = gql`
    type Quote {
        _id: String!
        id: String!
        quote: String!
        annotations: [Annotation]
    }
    type Article {
        _id: String!
        id: String!
        url: String!
        quotes: [Quote]
    }
    input quoteInput {
        qid: String!
        quote: String!
    }
    input articleInput {
        aid: String!
        url: String!
    }
    extend type Mutation {
        saveAnnotation(article: articleInput!, quote: quoteInput!, annotation: annotationInput!): Boolean
    }`;

module.exports = {
    typeDefs: typeDefs,
}