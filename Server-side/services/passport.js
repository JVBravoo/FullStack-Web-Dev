const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

// 1 argument = fetch
// 2 arguments = load into it
// trying to fetch
const User = mongoose.model('users');

passport.serializeUser((user, done) => { // Done is a callback
    done(null, user.id); // User.id is to identify the user
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

// Create a new instance of of google strategy
// Inside the constructor tells how to autheticate user inside our application
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback', // route when the user grants permission
    proxy: true
        }, 
    (accessToken, refreshToken, profile, done) => { // Error function
        // After the user select the google account, this will send a token 
        // to the terminal, just to check if the OAuth_flow is actually working.

        // Episode 43 = Queries
        // Find the first record of the googleId. // This line uses a "promise"
        User.findOne({ googleId: profile.id }).then(existingUser => {
            if(existingUser) {
                // If the existing User exists, then we already have a record with the given profile ID
                
                // line below not quite working
                done(null, existingUser); // Is finished and here is the User that was created
            } else {
                // Else, we don't have a user record with this ID, make a new record

                // The .then function is not quite working
                new User({ googleId: profile.id }).save().then(user => done(null, user)); 

                // new instace of User, and automatically save to the database
            }
        })
    }
    )
);