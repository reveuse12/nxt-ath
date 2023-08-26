const mongoose = require("mongoose");

async function connect() {
  try {
   await mongoose.connect(process.env.MONGOdB_URL);
    console.log('connected to mongoDB');
    mongoose.connection.on('error', (error) => {
      console.log('connection error in mongoDB',error)
    })

  } catch {
    console.log("cannot nahi raha bro connection to mongoDb");
  }
}

module.exports = connect;
