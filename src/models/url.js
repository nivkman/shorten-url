const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
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
    }

}, { timestamps: true });

const Url = mongoose.model('Url', urlSchema);
module.exports = Url;