const swaggerAutogen = require('swagger-autogen')()

const doc = {
  "info": {
    "title": 'REST API',
    "description": 'REST API with Express and Firestore'
  },
  //"host": 'localhost:5500',
  "host": 'restapi-wgw8.onrender.com',
  "schemes": [
    "https"
  ],
  "basePath": "/api",
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
      description: 'Enter your bearer token in the format **Bearer <token>**'
    }
  },
  security: [
    {
      bearerAuth: []
    }
  ]
};

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/*.js']

swaggerAutogen(outputFile, endpointsFiles, doc)