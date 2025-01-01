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
  
      if (!bio || !interests) {
        return res.status(400).json({ message: "Bio and interests are required" });
      }
  
      let profile = await Profile.findOneAndUpdate(
        { userId: req.user._id },
        { $set: { bio, interests } },
        { new: true, upsert: true } // Create a new profile if it doesn't exist
      );
  
      res.json(profile);
    })
  );
  
export default router;
