const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    firstName: String,
    lastName: String,
    authid: {
        type: String,
        required: true,
    },
    annotations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'annotation',
        },
    ],
});

const User = mongoose.model('user', userSchema);

module.exports = User;