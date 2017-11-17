7// Defining the User Schema

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    user: {
        
        id: String,
        token: String,
        email: String,
        name: String,
        curappoint: [{

            hospname: String,
            doctor: String,
            dept: String,
            time: String,
            mobNo: Number,
            verified: false,
            otp: Number,
            date: Date,
            token: Number
        
        }],
        preappoint: [{

            hospname: String,
            doctor: String,
            dept: String,
            time: String,
            date: Date

        }]
                
    }

});

module.exports = mongoose.model('User', userSchema);
