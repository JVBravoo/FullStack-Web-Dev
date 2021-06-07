const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// 1 argument = fetch
// 2 arguments = load into it
// trying to fetch
const User = mongoose.model('users');

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
        new User({ googleId: profile.id }).save(); // new instace of User, and automatically save to the database
    }
    )
);