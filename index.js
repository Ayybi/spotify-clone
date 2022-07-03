require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const songRoutes = require("./routes/songs");
const playlistRoutes = require("./routes/playlist");
const searchRoutes = require("./routes/search");
const connection = require("./db");

const app = express();

connection();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/login", authRoutes);

app.use("/api/songs", songRoutes);

app.use("/api/playlists", playlistRoutes);
app.use("/api/", searchRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Running on ${PORT} Port`);
});
