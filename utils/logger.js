const logSymbols = require('log-symbols');

const logger = (req, res, next) => {
    res.on('finish', () => {
        const {method, url} = req;
        const {statusCode} = res;
        let symbol = logSymbols.success;
    
        if(statusCode >= 400 && statusCode < 500) {
            symbol = logSymbols.info;
        } else if (statusCode >= 500) {
            symbol = logSymbols.error;
        }
    
        console.log(symbol, `${new Date().toLocaleString()}: ${method} ${url} ${statusCode}`);
    })
    next();
}

module.exports = logger;