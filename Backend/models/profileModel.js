import mongoose from 'mongoose';
import User from '../models/userModel.js'

// Profile schema

const profileSchema = new mongoose.Schema(
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true, // Ensure each user has only one profile
      },
      bio: { type: String, required: true },
      interests: { type: [String], required: true },
    },
    { timestamps: true }
  );
  
  const Profile = mongoose.model("Profile", profileSchema);

export default Profile
