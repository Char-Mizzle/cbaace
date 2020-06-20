const { gql } = require('apollo-server');

const User = require('./user').typeDefs;
const Annotation = require('./annotation').typeDefs;
const Article = require('./article').typeDefs;

const Query = gql`
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }
`

module.exports = {
    typeDefs : [Query, User, Annotation, Article]
} 