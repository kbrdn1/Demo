const express = require("express");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const userRoutes = require("./routes/user.routes");
const cors = require("cors");

const app = express();

// cors
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));


app.use(express.json());

// route
app.use("/api/user", userRoutes);

// server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});