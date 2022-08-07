const express = require('express');
const shortId = require('short-mongo-id');
const Url = require('../models/url');
const router = express();

router.get('/:id', (req, res) => {
    const id = "507f191e810c19729de860ea"
    const d = shortId(id)
    console.log(d)
})

router.post('/short', async (req, res) => {
    try {
        Url.create(req.body, (err, url) => {
            if (err) throw err;
            res.json({ status: 'SUCCESS', url });
        })
    } catch {
        res.json({ status: 'FAILED' });
    }
})

module.exports = router;