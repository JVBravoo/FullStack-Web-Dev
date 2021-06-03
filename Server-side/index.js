// index.js is the root file

// Inside this project, we used Google Cloud platform and Heroku.

// I won't use the syntax below, because Node.JS does not support the module that use this kind of syntax
// But on the frontEnd(React-side) is easier to use this syntax
// import express from 'express';
const express = require('express');
const mongoose = require('mongoose')
const keys = require('./config/keys')
require('./services/passport');

// mongoose.connect(keys.mongoURI);
mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

const app = express(); // The router will be associated with this app

// It could be like this:
// authRoute = require('./routes/authRoutes')
// and then calls the variable with (app).
require('./routes/authRoutes')(app);

// app.get = Get info
// app.post = Send info
// app.put = Update all the properties of something
// app.delete = Delete something
// app.patch = Update one or two properties of something


// app = express app to register this route handler with
// get = watch for incoming requests with this method
// '/' = Watch for incoming requests trying to acess '/'
// req = Object representing the incoming request
// res = Object representing the outgoing response
// res.send({hi:'there'}) = immediately send some JSON back to who ever made this request

// Environment variables
// The line below says to look the environment e see if they declared a port for us to use.
const PORT = process.env.PORT || 5000; // If the app is running on production (Heroku), take the left route, 
                                        // else, take the right
// http://localhost:5000/
app.listen(PORT);