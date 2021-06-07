// Collections of users

const mongoose = require('mongoose');
const {Schema} = mongoose;

// Line 2 could be written like this as well
// const Schema = mongoose.Schema;

const userSchema = new Schema({

    googleId: String // Tells that everytime a value shows up, it will be a String
});

// 1 argument = fetch
// 2 arguments = load into it
// loads the Schema onto mongoose (load)
mongoose.model('users', userSchema);