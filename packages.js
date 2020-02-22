const dotenv = require('dotenv');
const fastify = require('fastify')({ logger: true });

module.exports = {
    dotenv,
    fastify
};