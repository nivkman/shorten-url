const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    expireAt: { type: Date, default: null },
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
}, { timestamps: true });

urlSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });

const Url = mongoose.model('Url', urlSchema);
module.exports = Url;