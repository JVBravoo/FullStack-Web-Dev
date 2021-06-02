const passport = require('passport');

// exporting a function from this file
module.exports = (app) => {

app.get(
    '/auth/google', passport.authenticate('google', { // That is connected to the func GoogleStrategy. 
    scope: ['profile', 'email'] // We want those informations from google.
        })
    );

// Instead of kicking out the user from the OAuth_flow, this will try to get the code from the user profile
app.get('/auth/google/callback', passport.authenticate('google'));
};