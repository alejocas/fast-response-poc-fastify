const { dotenv } = require('./packages');
dotenv.config()
module.exports = {
    PORT: process.env.PORT
};