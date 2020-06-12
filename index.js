const express = require('express');

const app = express();

const webRoute = async (request, response) => {
    response.send('Hello World');
}

app.get('/', webRoute);
app.listen(3000);
