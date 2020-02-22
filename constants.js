const { dotenv } = require('./packages');
dotenv.config()
module.exports = {
    LOGGER_VALUE: process.env.LOGGER_VALUE,
    PORT: process.env.PORT
};