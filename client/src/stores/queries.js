import gql from "graphql-tag";

/* --------------------------------- Imports -------------------------------- */


/* ------------------------------- UserQueries ------------------------------- */
export const CURRENT_USER_QUERY = gql`
  {
    loggedInUser{
        _id
        id
        email
        firstName
        lastName
    }
  }
`;

export const GET_USER = gql`
    query User($id: String!){
        user(id: $id) {
            id
            email
            firstName
            lastName
            annotations
        }
    }
`

/* ------------------------------- Article Query ------------------------------- */
// This query is not working yet
export const ANNOTATION_BY_USER = gql`
    query AnnotationByUser($uid: String!){
        annotationByUser(uid: $uid) {
            id
        }
    }
`

export const ARTICLE_BY_URL = gql`
    query ArticleByUrl($url: String!){
        articleByUrl(url: $url) {
            id
            quotes{
                id
                quote
                annotations{
                    id
                    type
                    title
                    content
                    reference
                    created
                    likes
                    loves
                    smiles
                }
            }
        }
    }
`