const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    quotes: [
        {
            id: {
                type: String,
                required: true,
            },
            quote: {
                type: String,
                required: true,
            },
            annotations: [{
                type: Schema.Types.ObjectId,
                ref: 'annotation',
            }]
        },
    ],
});

const Article = mongoose.model('article', articleSchema);

module.exports = Article;