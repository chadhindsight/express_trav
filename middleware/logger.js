const moment = require('moment');

const loggers = (req, res, next) => {
    console.log(
        `${req.protocol}://${req.get('host')}${req.originalUrl
        }: ${moment().format()}`
    );
};