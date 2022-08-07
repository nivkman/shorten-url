const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    createdAt: { type: Date, default: Date.now, expires: 600 },
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
});


const Url = mongoose.model('Url', urlSchema);
module.exports = Url;