const mongoose = require("mongoose");
const URI = "mongodb://localhost:27017/test_clean_architecture";
//if localhost : const URI = 'mongodb://user:pass@hostname:27017/'
const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  // console.log("db connected successfully");
};

module.exports = connectDB;
