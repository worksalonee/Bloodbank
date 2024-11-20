let mongoose = require('mongoose')
let inventorySchema = new mongoose.Schema({
    inventoryType: {
        type: String,
        required: [true, 'inventory type is required*'],
        enum: ['in', 'out']
    },
    email: {
        type: String,
        required: [true, ' email is required*'],
    },
    bloodGroup: {
        type: String,
        required: [true, 'blood group is required *'],
        enum: ["O+", "O-", "AB+", "AB-", "A+", "A-", "B+", "B-"]
    },
    quantity: {
        type: Number,
        required: [true, 'blood quanity is required *']
    },
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'Organization is required *']
    },
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: function () {
            return this.inventoryType === "out"
        }
    },
    donar: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: function () {
            return this.inventoryType === "in"
        }
    }
}, { timestamps: true })
module.exports = mongoose.model('inventory', inventorySchema)