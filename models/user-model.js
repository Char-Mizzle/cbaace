const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    username: String,
    googleid: {
        type: String,
        required: true,
    },
    firstName: String,
    lastName: String,
    email: String,
    profileImage: String,
    status: String,
    maps: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'map',
        },
    ],
    tilesets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'tileset',
        },
    ]
});

const User = mongoose.model('user', userSchema);

module.exports = User;