
const {ValidationError} = require('joi');

const errorHandler = (error, req, res, next) => {
    let status = 0;
    let data = {
        message: 'Error'
    };
    if(error instanceof ValidationError)
    {
        status = error.status;
        data.message = error.message;
        return res.status(status).json(data);
    }
    if(error.status)
    {
        status = error.status;
    }
    if(error.message)
    {
        data.message = error.message
    }
    return res.status(status).json(data)
};

module.exports = errorHandler;