// Importing required modules
const express = require("express");
const path = require("path");

// Express server configuration
const PORT = 3001;

// Invoking Express server
const app = express();


// Middlewares

// express middleware to json data from the requestobject
app.use(express.json());
// express middleware to serve static file
app.use(express.static(path.join(__dirname + "/public")));



// REST API routes

// Root route
app
  .route("/api/v1")
  .get((req, res) => {
    res.sendFile(path.join(__dirname + "/public/welcome.html"));
  })
  .post((req, res) => {
    res.json({
      greet: "Welcome to RF-EDTECH RREST API",
      connection: "success",
    });
  });


// Starting Express server on the port=PORT host='localhost'
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
