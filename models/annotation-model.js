const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const annotationSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }],
    laughs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }],
    loves: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }],
});

const Annotation = mongoose.model('annotation', annotationSchema);

module.exports = Annotation;