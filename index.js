const express = require('express');
const app = express();
const schedule = require('./scheduler');

app.listen(3000, () => {
    //
    console.log('Server is running on port 3000');
});
