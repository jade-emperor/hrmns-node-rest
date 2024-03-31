const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// Routers
const employeesRouter = require('./routes/employees-router');


/// consider and parse incoming request as application/json
app.use(bodyParser.json()); 

// Add headers for CORS in all responses
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/hrmns', employeesRouter);

app.listen(8080);