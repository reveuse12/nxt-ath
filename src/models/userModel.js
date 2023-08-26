import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  email:{
    type: String,
    minlength: [8],
    required: true,
    unique: true,
  },
  username:{
    type: String,
    required: true,
    unique: true,
    minlength: [8],
    maxlength: [20],
  },
  password: {
    type: String,
    required: true,
    minlength: [8]
  }, 
  gender: {
    type: String,
    enum: ["male", "female", "others"],
  }
});

const User = mongoose.model('user', userSchema);

export default User;