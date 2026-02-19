const mongoose = require('mongoose');

const chatModelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    modelType: {
        type: String,
        required: true
    },
    parameters: {
        type: Object,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const ChatModel = mongoose.model('ChatModel', chatModelSchema);

module.exports = ChatModel;