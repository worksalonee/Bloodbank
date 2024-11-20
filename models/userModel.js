let mongoose = require('mongoose')
let userSchema = new mongoose.Schema({
    role: {
        type: String,
        required: [true, 'Role is Required  *'],
        enum: ['doner', 'admin', 'originazation', 'hospital']
    },
    name: {
        type: String,
        required: function () {
            if (this.role == 'doner' || this.role == 'admin') {
                return true
            }
            else {
                return false
            }
        }
    },
    email: {
        type: String,
        required: [true, 'Email is Required *'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is Required *'],

    },
    phone: {
        type: String,
        required: [true, 'Phone no is Required *'],
    },
    address: {
        type: String,
        required: [true, 'Address is Required *'],
    },
    originazationName: {
        type: String,
        required: function () {
            if (this.role == 'originazation') {
                return true
            }
            else {
                return false
            }
        }
    },
    hospitalName: {
        type: String,
        required: function () {
            if (this.role == 'hospital') {
                return true
            }
            else {
                return false
            }
        }
    }
}, { timestamps: true })
//export
module.exports = mongoose.model('users', userSchema)