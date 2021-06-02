const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

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