import "regenerator-runtime";
import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import "./models/Comment";
import app from "./server";

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log("✅Server listenting on port http://localhost:4000 🚀");

app.listen(PORT, handleListening);
