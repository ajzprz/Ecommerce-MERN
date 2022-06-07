const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/doko");
    console.log("Database Connected Successfully");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDatabase;
