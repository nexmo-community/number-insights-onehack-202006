const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: process.env.NEXMO_API_KEY,
    apiSecret: process.env.NEXMO_API_SECRET
});

const options = {
    level: 'basic',
    number: '14199564232'
};

const basicHandler = (error, response) => {
    console.log(response);
}

nexmo.numberInsight.get(options, basicHandler);