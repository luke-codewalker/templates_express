const bodyParser = require('body-parser');
const express = require('express');
const app = express();

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.on('finish', () => {
        console.log(`${new Date().toLocaleString()}: ${req.method} ${req.url} ${res.statusCode}`);
    })
    next();
})

app.get('/', (req, res) => {
    res.json({message: 'Hello World'});
})

app.listen(PORT, () => console.log(`App started on http://localhost:${PORT}`));