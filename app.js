require('dotenv').config()

// Importing required modules
const express = require("express");
const path = require("path");
const cors = require('cors')

// importing custom modules
const connectToMongoDB = require("./connect");

// importing router
const authRoute = require('./routes/authRoute')
const coursesRoute = require('./routes/coursesRoute')
const notesRoute = require('./routes/notesRoute')

// Express server configuration
const PORT = process.env.PORT;
// mongoose configuration
const MONGOOSE_URI = process.env.MONGOOSE_URI


// Invoking Express
const app = express();
// connecting to mongoDB
connectToMongoDB(MONGOOSE_URI).then(() => console.log(`Connect to mongoDB to URI: ${MONGOOSE_URI}`))


// Middlewares
app.use(cors({
    origin: "http://127.0.0.1:5173"
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
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

app.use('/api/v1/auth', authRoute)
app.use('/api/v1/courses', coursesRoute)
app.use('/api/v1/notes', notesRoute)

// Starting Express server on the port=PORT host='localhost'
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
