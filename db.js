const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connection from database successfully!");
  } catch (err) {
    console.log(err);
  }
};
