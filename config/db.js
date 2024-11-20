let mongoose = require('mongoose')
let colors = require('colors')
let databaseConnection = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/blood`)
        console.log(`database connected successfully`.bgCyan.white)
    }
    catch (err) {
        console.log(`somthing wrong in database connection`.bgWhite.black)
    }
}
module.exports = databaseConnection