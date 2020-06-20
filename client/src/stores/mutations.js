import gql from "graphql-tag";

export const SAVE_ANNOTATION = gql`
    input quoteInput {
        qid: String!
        quote: String!
    }
    input articleInput {
        aid: String!
        url: String!
    }
    input annotationInput {
        anid: String!
        type: AnnType!
        title: String!
        content: String!
        reference: String
    }
    mutation SaveAnnotation($article: articleInput!, $quote: quoteInput!, $annotation: annotationInput!) {
        saveAnnotation(article: $article, quote: $quote, annotation: $annotation)
    }
    
`;
export const TOOGLE_REACTION = gql`
    mutation ToogleReaction($id: String!, $type: String!) {
        toogleReaction(id: $id, type: $type)
    }
`;
export const DELETE_ANNOTATION = gql`
mutation DeleteAnnotation($aid: String!, $qid: String!) {
    deleteAnnotation(aid: $aid, qid: $qid)
}
`;