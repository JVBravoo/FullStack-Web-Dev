// index.js is the root file

// Inside this project, we used Google Cloud platform and Heroku.

// I won't use the syntax below, because Node.JS does not support the module that use this kind of syntax
// But on the frontEnd(React-side) is easier to use this syntax
// import express from 'express';
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
require("./models/User"); //  Had to change the order of the required, with the line below (did not understand, but it worked magically)
require("./services/passport");
require("./models/Survey");

mongoose.connect(keys.mongoURI);
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });

const app = express(); // The router will be associated with this app

app.use(bodyParser.json());
app.use(
  cookieSession({
    // How long the cookie will exist inside the browser before it expires
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days times 24 hours on a day times 60 minutes on a hour...
    keys: [keys.cookieKey],
  })
);

// Episode 47 to finish the authentication flow in the whole app
app.use(passport.initialize());
app.use(passport.session());

// It could be like this:
// authRoute = require('./routes/authRoutes')
// and then calls the variable with (app).
require("./routes/authRoutes")(app);
require("./routes/billingRoutes.js")(app);
require("./routes/surveyRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

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
// Not the last line anymore

// ERROR:
// In the end of section 06, I had an error, "MongoNetworkError: failed to connect to server"

// For some reason my cluster was not connecting to the application
