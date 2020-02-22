const { LOGGER_VALUE } = require('./constants');

const dotenv = require('dotenv');
const fastify = require('fastify')({ logger: LOGGER_VALUE });

module.exports = {
    dotenv,
    fastify
};