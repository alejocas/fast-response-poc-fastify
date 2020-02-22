const statusRootSchema = {
    schema: {
      description: 'Unauthenticate access',
      tags: ['Index'],
      summary: 'Hello World',
      response: {
        200: {
          type: 'object',
          properties: {
            hello: { type: 'string' }
          }
        }
      }
    }
  }

module.exports = statusRootSchema;