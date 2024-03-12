// We reuse this import in order to have access to the `body` property in requests
const express = require("express");

// ℹ️ Responsible for the messages you see in the terminal as requests are coming in
// https://www.npmjs.com/package/morgan
const logger = require("morgan");

// ℹ️ Needed when we deal with cookies (we will when dealing with authentication)
// https://www.npmjs.com/package/cookie-parser
const cookieParser = require("cookie-parser");

// ℹ️ Needed to accept requests from 'the outside'. CORS stands for cross origin resource sharing
// unless the request is made from the same domain, by default express wont accept POST requests
const cors = require("cors");

const originUrl = process.env.ORIGIN || "http://localhost:3000";

// Middleware configuration
module.exports = app => {
  // When deployed, our backend will not receive requests directly, but from a proxy
  // server which receives all the requests and then forwards them to our server. 
  // Hosting services like Heroku use a proxy.
  // We set the following option to allow requests coming from a proxy server.
  app.set('trust proxy', 1);
 
  // controls a very specific header to pass headers from the frontend
  app.use(
    cors({
    //  credentials: true,
      origin: [originUrl] //|| 'http://localhost:5173'
    })
  );

  // In development environment the app logs
  app.use(logger("dev"));

  // To have access to `body` property in the request
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
};
