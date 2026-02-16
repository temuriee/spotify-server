const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Provide A Name"],
      maxlength: [40, "Name Should'nt Be More Than 40 Characters"],
      minlength: [2, "Name Should Be At Least 2 Characters"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email",
      ],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: [6, "Password should be at least 6 characters"],
    },
    profilePicture: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2018/11/21/08/37/brain-3829057_1280.jpg",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },

    likedSongs: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Song",
    },
    likedAlbum: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Album",
    },
    followedArtists: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artist",
    },
    followedPlaylists: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Playlist",
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

module.exports = User;
