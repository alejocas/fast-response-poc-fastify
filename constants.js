const { dotenv } = require('./packages');
dotenv.config()
module.exports = {
    LOGGER_VALUE: JSON.parse(process.env.LOGGER_VALUE),
    PORT: JSON.parse(process.env.PORT)
};