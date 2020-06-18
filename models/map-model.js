const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mapSchema = new Schema({
    id: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    preview: String,
    ispublic: {
        type: Boolean,
        require: true,
    },
    background: String,
    nextlayerid: {
        type: Number,
        require: true,
    },
    nextobjectid: {
        type: Number,
        require: true,
    },
    orientation: {
        type: String,
        require: true,
    },
    renderorder: {
        type: String,
        require: true,
    },
    tileheight: {
        type: Number,
        require: true,
    },
    tilewidth: {
        type: Number,
        require: true,
    },
    height: {
        type: Number, 
        require: true
    },
    width: {
        type: Number, 
        require: true
    },
    layers: [{
        id:  {
            type: Number,
            require: true,
        },
        data: [ {
            type: Number,
            require: true,
        },],
        height:  {
            type: Number,
            require: true,
        },
        width:  {
            type: Number,
            require: true,
        },
        name:  {
            type: String,
            require: true,
        },
        opacity:  {
            type: Number,
            require: true,
        },
        type:  {
            type: String,
            require: true,
        },
        visible:  {
            type: Boolean,
            require: true,
        },
        x:  {
            type: Number,
            require: true,
        },
        y:  {
            type: Number,
            require: true,
        },
        locked: {
            type: Boolean,
            require: true,
        }
    }],
    tilesets: [
        {
            tilesetid: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'tileset',
            },
            firstgid: Number,
        },
    ],
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

const Map = mongoose.model('map', mapSchema);

module.exports = Map;