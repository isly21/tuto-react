const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true
    }
});
let User = module.exports = mongoose.model('User', userSchema);
//console.log("User :"+User);