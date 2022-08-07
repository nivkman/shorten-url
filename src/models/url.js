const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    shortId: {
        type: String
    },
    originalUrl: {
        type: String,
        require: true
    },
    clicks: {
        type: Number,
        default: 0
    },
    label: {
        type: String
    },
    expiration: {
        type: Number,
        default: 5 // 5 mins
    }
}, { timestamps: true });

const Url = mongoose.model('Url', urlSchema);
module.exports = Url;