const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const errorHandler = require('./utils/errorHandler');
const logger = require('./utils/logger');
const notFoundHandler = require('./utils/notFoundHandler');
const app = express();

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const PORT = process.env.PORT || 5000;

// middleware
app.use(bodyParser.json());
app.use(helmet());
app.use(logger);

// routes
app.get('/', (req, res) => {
    res.json({message: 'Hello World 👋'});
})

// handler exceptions
app.use(notFoundHandler);
app.use(errorHandler);

// start the app
app.listen(PORT, () => console.log(`🚀 App started on http://localhost:${PORT}`));