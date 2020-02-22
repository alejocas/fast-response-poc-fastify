const authRootSchema = {
    schema: {
      description: 'Only authenticate access',
      tags: ['Index'],
      summary: 'Hello Username',
      security: [{ "apiKey": [] }],
      response: {
        200: {
          type: 'object',
          properties: {
            hello: { type: 'string' }
          }
        }
      }
    },
    preHandler: fastify.auth([fastify.jwtAuth])
  }

module.exports = authRootSchema;