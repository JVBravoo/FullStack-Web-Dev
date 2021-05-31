// index.js is the root file

// Inside this project, we used Google Cloud platform and Heroku.

// I won't use the syntax below, because Node.JS does not support the module that use this kind of syntax
// But on the frontEnd(React-side) is easier to use this syntax
// import express from 'express';
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express(); // The router will be associated with this app


// Create a new instance of of google strategy
// Inside the constructor tells how to autheticate user inside our application
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback' // route when the user grants permission
        }, 
    (accessToken, refreshToken, profile, done) => { // Error function
        // After the user select the google account, this will send a token 
        // to the terminal, just to check if the OAuth_flow is actually working.
        console.log('access token', accessToken);
        console.log('refresh token', refreshToken); 
        console.log('profile', profile); 
    }
    )
);

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

app.get(
    '/auth/google', passport.authenticate('google', { // That is connected to the func GoogleStrategy. 
    scope: ['profile', 'email'] // We want those informations from google.
    })
);

// Instead of kicking out the user from the OAuth_flow, this will try to get the code from the user profile
app.get('/auth/google/callback', passport.authenticate('google'));

// Environment variables
// The line below says to look the environment e see if they declared a port for us to use.
const PORT = process.env.PORT || 5000; // If the app is running on production (Heroku), take the left route, 
                                        // else, take the right
// http://localhost:5000/
app.listen(PORT);