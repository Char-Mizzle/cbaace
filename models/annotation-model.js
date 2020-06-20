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
    UsersLiked: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }],
    UsersHearted: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }],
    UsersSmiled: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }],
});

const Annotation = mongoose.model('annotation', annotationSchema);

module.exports = Annotation;