import mongoose from 'mongoose';
import User from '../models/userModel.js'

// Profile schema
const profileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
    unique: true, 

  },
  bio: {
    type: String,
    default: '',
  },
  interests: {
    type: [String], // Array of interests
    default: [],
  },
 
}, { timestamps: true }); 

const Profile = mongoose.model('Profile', profileSchema);

export default Profile
