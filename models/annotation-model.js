const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const annotationSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['CORRECT', 'DOUBT', 'ERROR'],
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    reference: {
        type: String,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    created: {
        type: Schema.Types.Date,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }],
    loves: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }],
    smiles: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }],
});

const Annotation = mongoose.model('annotation', annotationSchema);

module.exports = Annotation;