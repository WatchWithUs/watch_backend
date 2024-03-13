// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

const { isAuthenticated } = require("./middleware/jwt.middleware");//13/03/2024
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

// ℹ️ Connects to the database
require("./db");

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);




// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const moviesRoutes = require("./routes/movie.routes");
const collectionRoutes = require("./routes/collection.routes");
const userRoutes = require("./routes/user.routes");

app.use("/", moviesRoutes);
//app.use("/api/movies", moviesRoutes);
app.use("/", collectionRoutes);
app.use("/", userRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

// Connect to DB
// mongoose
//   .connect("mongodb://127.0.0.1:27017/watch_backend")
//   .then((response) => {
//     console.log(`Connected! Database Name: "${response.connections[0].name}"`);
//   })
//   .catch((err) => console.error("Error connecting to Mongo", err));

module.exports = app;
