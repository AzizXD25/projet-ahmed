const mongoose = require("mongoose")
const connectDB = async() => { try
{
    await mongoose.connect(process.env.DB_URI)
    console.log("Database connected ..")
} catch (error) {
    console.log("Not connected !!!")
}
}
module.exports = connectDB