const errorHandler = (err, req, res, next) => {
    if(err) {
        console.log('An error occured: ', err);
        res.status(500).json({ status: 500, message: 'Something went wrong on the server.'});
    } else {
        next();
    }
}

module.exports = errorHandler;