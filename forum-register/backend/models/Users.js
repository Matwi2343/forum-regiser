const mongoose = require('mongoose');

const userShema = new mongoose.Schema({username:{String,required: true,unique: true },
    email: {type:String,required:true,unique:true},
    password:{type:String, required:true}
});

const User = mongoose.model("User", userShema);
module.exports = User;