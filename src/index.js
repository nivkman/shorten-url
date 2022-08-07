const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

require('dotenv').config();
app.use(cors());

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DATABASEURL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, (err) => {
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

app.listen(process.env.PORT, () => {
    console.log(`(${process.env.SERVICE}) running at PORT: ${process.env.PORT}`);
})