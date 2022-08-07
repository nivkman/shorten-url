const express = require('express');
const router = express();

router.get('/status', (req,res) => {
    console.send('good')
})

module.exports = router;