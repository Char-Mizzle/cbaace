const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tilesetSchema = new Schema({
    id: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    margin: {
        type: Number,
        require: true,
    },
    source: {
        data: Buffer, 
        contentType: String,
    },
    filetype: {
        type: String,
        require: true,
    },
    columns: {
        type: Number,
        require: true,
    },
    rows: {
        type: Number,
        require: true,
    },
    spacing: {
        type: Number,
        require: true,
    },
    count: {
        type: Number,
        require: true,
    },
    ispublic: {
        type: Boolean,
        require: true,
    },
    height: {
        type: Number,
        require: true,
    },
    width: {
        type: Number,
        require: true,
    },
    authors: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
        },
    ],
    properties: [
        {
            name: String,
            type: { type: String },
            value: String,
        }
    ],
    lastedit: {
        type: Date, 
        default: Date.now,
    },
});

const Tileset = mongoose.model('tileset', tilesetSchema);

module.exports = Tileset;