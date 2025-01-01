import express from 'express';
import asyncHandler from 'express-async-handler';
import Profile from '../models/profileModel.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get(
  '/profile',
  authMiddleware,
  asyncHandler(async (req, res) => {
    const profile = await Profile.findOne({ userId: req.user._id });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(profile);
  })
);

router.put(
    '/profile',
    authMiddleware,
    asyncHandler(async (req, res) => {
      const { bio, interests } = req.body;
  
      // Ensure bio and interests are provided
      if (!bio || !interests) {
        return res.status(400).json({ message: "Bio and interests are required" });
      }
  
      try {
        let profile = await Profile.findOneAndUpdate(
          { userId: req.user._id }, // Search for the profile by user ID
          { $set: { bio, interests } }, // Update bio and interests
          { new: true, upsert: true } // Create profile if it doesn't exist
        );
  
        res.status(200).json(profile);
      } catch (error) {
        console.error("Error updating profile:", error.message);
        res.status(500).json({ message: "Failed to update profile" });
      }
    })
  );
  
  
export default router;
