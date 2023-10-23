// Import the express module
const express = require('express');

// Import the cors module
const cors = require("cors");

// Create an instance of the Express application
const v1Engine = express();

// Middleware that adds CORS so that our API can be accessed by other domains
v1Engine.use(cors());

// Set up a GET route for '/ping'
v1Engine.get('/ping', (req: any, res: any) => {
  // Send 'pong' as the response
  res.send("pong");
});

v1Engine.get('/ping2', async (req: any, res: any) => {
  // Send 'pong' as the response
  res.send("pong");
});



import products from "./products";


v1Engine.get('/products', (req: any, res: any) => {
  // Send 'pong' as the response
  res.send(products.test())

});

export default v1Engine 

