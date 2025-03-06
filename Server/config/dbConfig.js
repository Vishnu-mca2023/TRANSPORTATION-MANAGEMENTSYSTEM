const mongoose = require("mongoose");

const connection = mongoose.connect(
  `mongodb+srv://vishnu:vishnu2531@cluster0.5iwwd.mongodb.net/transport`
);

try {
  console.log(`Database Connected!`);
} catch (error) {
  console.log(error);
}

module.exports = connection;
