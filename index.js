const express = require('express');
const Nexmo = require('nexmo');

const app = express();

const webRoute = async (request, response) => {
    const nexmo = new Nexmo({
        apiKey: process.env.NEXMO_API_KEY,
        apiSecret: process.env.NEXMO_API_SECRET
    });

    const options = {
        level: 'basic',
        number: '14199564232'
    };
    
    const basicHandler = (err, res) => {
        response.send(res.country_name);
    }
    
    nexmo.numberInsight.get(options, basicHandler);
}

app.get('/', webRoute);
app.listen(3000);
