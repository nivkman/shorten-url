const express = require('express');
const shortId = require('short-mongo-id');
const Url = require('../models/url');
const router = express();

const expUrlNotFound = (res) => {
    res.json({ status: 'FAILED', msg: 'url not found!' });
}

router.get('/:id', (req, res) => {
    try {
        Url.find({ shortId: req.params.id }, async (err, urls) => {
            if (err) throw err;
            if (!urls.length) return expUrlNotFound(res);
            const url = await urls[0];
            url.clicks += 1;
            url.save();
            res.redirect(url.originalUrl);
        })
    } catch (err) {
        expUrlNotFound(res);
    }
})

router.get('/stats/:id', (req, res) => {
    try {
        Url.find({ shortId: req.params.id }, async (err, urls) => {
            if (err) throw err;
            if (!urls.length) expUrlNotFound(res);
            res.json(urls[0]);
        })
    } catch (err) {
        expUrlNotFound(res);
    }
})

router.post('/', async (req, res) => {
    try {
        Url.create({ originalUrl: req.body.originalUrl }, async (err, url) => {
            if (err) throw err;
            url.shortId = await shortId(url._id);
            url.createdAt.expires = req.body.expires * 60 || 600;
            await url.save();
            res.json({ status: 'SUCCESS', url });
        })
    } catch (err) {
        res.json({ status: 'FAILED', err });
    }
})

module.exports = router;