const mongoose = require("mongoose");
const DATABASE_URL = require("./constants.js");

const connectDB = async () => {
  const conn = await mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB Connected");
  try {
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
