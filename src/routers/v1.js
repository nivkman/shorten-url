const express = require('express');
const shortId = require('short-mongo-id');
const Url = require('../models/url');
const router = express();

router.get('/:id', (req, res) => {
    try {
        Url.find({ shortId: req.params.id }, async (err, urls) => {
            if (err) throw err;
            const url = await urls[0];
            url.clicks +=1;
            url.save(); 
            res.redirect(url.originalUrl);
        })
    } catch {
        res.json({ status: 'FAILED' });
    }
})

router.get('/stats/:id', (req, res) => {
    try {
        Url.find({ shortId: req.params.id }, async (err, urls) => {
            if (err) throw err;
            res.json(urls[0]);
        })
    } catch {
        res.json({ status: 'FAILED' });
    }
})

router.post('/', async (req, res) => {
    try {
        Url.create(req.body, async (err, url) => {
            if (err) throw err;
            url.shortId = await shortId(url._id);
            await url.save();
            res.json({ status: 'SUCCESS', url });
        })
    } catch {
        res.json({ status: 'FAILED' });
    }
})

module.exports = router;