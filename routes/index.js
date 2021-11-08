var express = require('express');
var router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');


const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Metadata test API documentation",
      version: "0.1.0",
      description:
        "This is the API documentation for metadata test APi",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Kenneth Uchechukwu",
        url: "",
        email: "kennethuche06@gmail.com",
      },
    },
    servers: [
      {
        url: "",
      },
    ],
  },
  apis: ["./routes/*.js"],
};


const specs = swaggerJsdoc(options);


/* GET home page. */
router.use('/', swaggerUi.serve,swaggerUi.setup(specs) );
router.get('/' , swaggerUi.setup(specs));
// router.get('/', function(req, res, next) {
//   res.send('API is running');
// });

module.exports = router;