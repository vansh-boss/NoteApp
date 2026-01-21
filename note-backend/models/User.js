import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,

    avatars: [
      {
        imageId: String,
        path: String,
        uploadedAt: Date,
      },
    ],

    activeAvatar: String,
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
  