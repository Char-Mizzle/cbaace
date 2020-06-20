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
    upvotes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }],
    downvotes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }],
});

const Annotation = mongoose.model('annotation', annotationSchema);

module.exports = Annotation;