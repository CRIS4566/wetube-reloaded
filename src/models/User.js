import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	email: { type: String, required: true, unqique: true },
	avatarUrl: String,
	socailOnly: { type: Boolean, default: false },
	username: { type: String, required: true, unqique: true },
	password: { type: String },
	name: { type: String },
	location: String,
	videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
});

userSchema.pre(`save`, async function () {
	if (this.isModified("password")) {
		this.password = await bcrypt.hash(this.password, 7);
	}
});

const User = mongoose.model("User", userSchema);
export default User;
