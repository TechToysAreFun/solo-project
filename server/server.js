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