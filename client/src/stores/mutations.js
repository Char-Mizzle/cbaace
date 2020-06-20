import gql from "graphql-tag";

export const UPDATE_MAP_FIELD = gql`
    mutation UpdateMapField($id: String!, $value: String!, $field: String!) {
        updateMapField(id: $id, value: $value, field: $field) @client
    }
    
`;
export const RESIZE_MAP = gql`
    mutation ResizeMap($id: String!, $value: String!, $field: String!) {
        resizeMap(id: $id, value: $value, field: $field) @client
    }
    
`;
export const UPDATE_MAP_LAYER_FIELD = gql`
    mutation UpdateMapLayerField($id: String!, $value: String!, $field: String!, $layerId: Int!) {
        updateMapLayerField(id: $id, value: $value, field: $field, layerId: $layerId) @client

    }
`;
export const SET_LAYER_DATA = gql `
    mutation SetLayerData($id: String!, $value: [Int!]!, $layerId: Int!) {
        setLayerData(id: $id, value: $value, layerId: $layerId) @client
    }
`;
export const REORDER_LAYERS = gql `
    mutation ReorderLayers($id: id, $value: String!, $layerId: Int!) {
        reorderLayers(id: $id, value: $value, layerId: $layerId) @client
    }
`;
export const DELETE_LAYER= gql `
    mutation DeleteLayer($id: id, $layerId: Int!) {
        deleteLayer(id: $id,layerId: $layerId) @client
    }
`;
export const DUPLICATE_LAYER= gql `
    mutation DuplicateLayer($id: id, $layerId: Int!, $objId: objId) {
        duplicateLayer(id: $id,layerId: $layerId, objId: $objId) @client
    }
`;
export const ADD_LAYER = gql `
    mutation AddLayer($id: id, $objId: objId) {
        addLayer(id: $id, objId: $objId) @client
    }
`;

export const SAVE_MAP = gql `
    mutation SaveMap($map: MapInput!) {
        saveMap(map: $map)
    }
`;

export const DELETE_MAP = gql `
    mutation DeleteMap($id: String!) {
        deleteMap(id: $id)
    }
`;



export const IMPORT_MAP = gql `
    mutation ImportMap($map: Map!) {
        importMap(map: $map)
    }

`;
export const UPDATE_TILESET_FIELD = gql `
    mutation UpdateTilesetField($id: String!, $value: String!, $field: String!) {
        updateTilesetField(id: $id, value: $value, field: $field) @client
    }
`

export const SAVE_TILESET= gql `
    mutation SaveTileset($tileset: TilesetInput!) {
        saveTileset(tileset: $tileset)
    }
`;

export const DELETE_TILESET = gql `
    mutation DeleteTileset($id: String!) {
        deleteTileset(id: $id)
    }
`;

// takes objectid for either map or tileset, new ispublic value, and type=('map' or 'tileset')
export const SET_IS_PUBLIC = gql`
    mutation SetIsPublic($objectid: String!, $ispublic: Boolean!, $type: String!) {
        setIsPublic(objectid: $objectid, ispublic: $ispublic, type: $type)
    }
`;

export const SAVE_USER_STATUS = gql `
    mutation SaveUserStatus($status: String) {
        saveUserStatus(status: $status)
    }
`;