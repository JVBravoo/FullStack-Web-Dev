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

    // This function kills the user cookie, so that does the logout of the user for our app.
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    // Request comes in and sent to route handler
    // Then the cookie-session will extract the data
    // and passport will pull the userID out of cookie data
    // the DeserializeUser function will write to turn userID into a user
    // And finally, the user model instance added to req object as 'req.user' (line 21)
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};