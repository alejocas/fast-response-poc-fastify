const { fastify } = require('./packages');
const userService = require('./api/v1/service/userService');

fastify
    .register(userService, { prefix: '/user' })