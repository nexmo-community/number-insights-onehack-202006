const express = require('express');
const Nexmo = require('nexmo');
const mustacheExpress = require('mustache-express');4

const app = express();
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

const webRoute = async (request, response) => {
    if (request.query.number) {
        const nexmo = new Nexmo({
            apiKey: process.env.NEXMO_API_KEY,
            apiSecret: process.env.NEXMO_API_SECRET
        });
    
        const options = {
            level: request.query.level || 'basic',
            number: request.query.number
        };
        
        const basicHandler = (err, res) => {
            if (res.status == 0) {
                response.render('lookup', {insight: res});
            } else {
                response.render('lookup', {error: res});
            }
            
        }
        
        nexmo.numberInsight.get(options, basicHandler);
    } else {
        response.render('lookup');
    }
    
}

app.get('/', webRoute);
app.listen(3000);
