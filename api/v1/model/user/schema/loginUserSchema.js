const loginUserSchema = {
    schema: {
      description: 'Login User API',
      tags: ['User'],
      summary: 'Create a JWT for authenticate API calls',
      body: {
        type: 'object',
        required: ['username', 'password'],
        properties: {
          username: { type: 'string' },
          password: { type: 'string' },
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            token: { type: 'string' }
          }
        },
        401: {
          type: 'object',
          properties: {
            errorCode: { type: 'string' },
            errorMessage: { type: 'string' }
          }
        }
      }
    }
  }

module.exports = loginUserSchema;