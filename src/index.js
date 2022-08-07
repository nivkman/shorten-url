const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

require('dotenv').config();
app.use(cors());

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASEURL, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('DB connected');
    }
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/api/v1', require('./routers/v1.js'));

app.listen(PORT, () => {
    console.log(`(backend) running at PORT: ${PORT}`);
})