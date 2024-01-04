const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');


//! Import middleware here


const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded);
app.use(cookieParser());

//! Import SQL database here


// Server static files
app.use('/client', express.static(path.resolve(__dirname, '../client')));


// Log all route calls
app.use((req, res, next) => {
    console.log(`
    ******************\n
    FLOW CHECK\n
    URL: ${req.url}\n
    METHOD: ${req.method}\n
    ******************\n`)
    next();
});


//! ADD ROUTE HANDLERS HERE









// 404 Route Handler
app.use((req, res, next) => {
    res.status(404).send('404 Not Found');
})

// Global Error Handler
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occured' },
    };
    const errorObj = Object.assign({}, defauultErr, err);
    console.log('Global Error: ', errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
})

// Start Server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});

module.exports = app;