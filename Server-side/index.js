// index.js is the root file

// I won't use the syntax below, because Node.JS does not support the module that use this kind of syntax
// But on the frontEnd(React-side) is easier to use this syntax
// import express from 'express';
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express(); // The router will be associated with this app


// Create a new instance of of google strategy
// Inside the constructor tells how to autheticate user inside our application
passport.use(new GoogleStrategy());

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