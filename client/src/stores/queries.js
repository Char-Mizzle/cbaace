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
        status
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
            profileImage
            status
        }
    }
`

/* ------------------------------- HomepageQueries ------------------------------- */

export const MAP_FEED = gql `
    query MapFeed($keyword:String, $author: String){
        mapFeed(keyword:$keyword, author:$author) {
            _id
            id
            name
            preview
            ispublic
            authors {
                id
                email
                firstName
                lastName
            }
        }
    }
`;

export const TILESET_FEED = gql `
    query TilesetFeed($keyword:String, $author: String){
        tilesetFeed(keyword:$keyword, author:$author) {
            _id
            id
            name
            source
            ispublic
            authors {
                id
                email
                firstName
                lastName
            }
        }
    }
`;

// export const RECENT_FEED = gql `
//     query MapFeed($id: String){
//         mapFeed(author: $id) {
//             _id
//             id
//             name
//             ispublic
//             preview
//             authors {
//                 id
//                 email
//                 firstName
//                 lastName
//             }
//         }
//     }
// `;

export const MAP_PREVIEWS = gql `
    {
        mapPreviews @client 
    }
    
    
`;
export const TILESET_PREVIEWS = gql `
    {
        tilePreviews @client 
    }
   
`;

/* ------------------------------- MapQueries ------------------------------- */

export const MAP_BY_ID = gql `
        query MapById($id: String) {
            mapById(id: $id) {
                _id
                id
                name
                preview
                ispublic
                background
                authors {
                    id
                }
                layers {
                    _id
                    data
                    height
                    id
                    name
                    opacity
                    type
                    visible
                    width
                    x
                    y
                    locked
                }
                background
                nextlayerid
                nextobjectid
                orientation
                renderorder
                tileheight
                tilewidth
                height
                width
                tilesets{
                    firstgid
                    tileset{
                        id   
                        source
                        name  
                    }
                }
                properties{
                    name
                    type
                    value
                }
                authors{
                    firstName
                    lastName
                    id
                }
            }
        }
    
`;
/* ------------------------------- TilesetQueries ------------------------------- */
export const TILESET_BY_ID = gql `
    query TilesetById($id: String!){
        tilesetById(id: $id) {
            _id
            id
            name
            margin
            source
            filetype
            columns
            rows
            spacing
            count
            ispublic
            height
            width
            authors{
                id
                firstName
                lastName
            }
        }
    }
`;

export const TILESET_FROM_IDS = gql `
    query TilesetFeed($ids: [String]){
        tilesetFeed(ids: $ids) {
            _id
            id
            name
            margin
            source
            filetype
            columns
            rows
            spacing
            count
            ispublic
            height
            width
            authors{
                id
                firstName
                lastName
            }
        }
    }
`;

/* ------------------------------ EditorQueries ----------------------------- */

export const GET_EDITOR_VALUES = gql  `
    {
        activeTool @client
        zoom @client
        activeLayer @client
        visibleLayers @client
        currentTiles @client
        currentDimensions @client
    }
`;

export const GET_ACTIVE_TOOL = gql `
    {
        activeTool @client
    }
`;
export const GET_ZOOM_LEVEL = gql `
    {
        zoom @client
    }
`;
export const GET_ACTIVE_LAYER = gql `
    {
        activeLayer @client
    }
`;
export const GET_VISIBLE_LAYERS = gql `
    {
        visibleLayers @client
    }
`;
