import User from "../models/User.js";

export const uploadAvatar = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const imagePath = `/uploads/${req.file.filename}`;

    user.avatars.push({
      imageId: req.file.filename,
      path: imagePath,
      uploadedAt: new Date(),
    });

    user.activeAvatar = imagePath;

    await user.save();

    res.json({ success: true, user });
  } catch (err) {
    console.error("UPLOAD ERROR:", err);
    res.status(500).json({ message: "Upload failed" });
  }
};
