import express from "express";
import authMiddleware from "../middleware/auth.js";
import { upload } from "../middleware/uploads.js";
import { uploadAvatar } from "../controllers/userController.js";

const router = express.Router();

router.post(
  "/upload-avatar",
  authMiddleware,
  upload.single("avatar"),
  uploadAvatar
);

export default router;
