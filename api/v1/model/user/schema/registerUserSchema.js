const registerUserSchema = {
    schema: {
      description: 'Register a new User',
      tags: ['User'],
      summary: 'Register a new User',
      body: {
        type: 'object',
        required: ['username', 'email', 'password'],
        properties: {
          username: { type: 'string' },
          email: { type: 'string' },
          password: { type: 'string' },
        }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            _id: { type: 'string' },
            username: { type: 'string' },
            email: { type: 'string' },
            roles: { type: 'array', items: { type: 'string' } }
          }
        },
        409: {
          type: 'object',
          properties: {
            errorCode: { type: 'string' },
            errorMessage: { type: 'string' }
          }
        }
      }
    }
  }

module.exports = registerUserSchema;