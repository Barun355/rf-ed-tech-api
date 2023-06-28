// Importing required modules
const express = require("express");
const path = require("path");
const cors = require('cors')

// importing custom modules
const connectToMongoDB = require("./connect");
const authRoute = require('./routes/authRoute')


// Express server configuration
const PORT = 3001;
// mongoose configuration
const URI = 'mongodb://localhost:27017/rf-ed-tech'


// Invoking Express
const app = express();
// connecting to mongoDB
connectToMongoDB(URI).then(() => console.log(`Connect to mongoDB to URI: ${URI}`))


// Middlewares
app.use(cors({
    origin: 'http://127.0.0.1:5173'
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

// Starting Express server on the port=PORT host='localhost'
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
