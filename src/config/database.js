const mongoose = require('mongoose');
const connectDB = async () => {

    await mongoose.connect("mongodb+srv://abhinav120619912_db_user:6tr7QpqkGyHS38ab@namastenode.l5gmmyb.mongodb.net/?appName=namastenode")
}


module.exports = connectDB;