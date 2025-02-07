const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./Config/db.js");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

//Link Routs
const UserLoginRoute = require("./Routes/UserLoginRoute.js");
const UserRoute = require("./Routes/UserManagementRoutes.js");
const UserProfileRoute = require("./Routes/UserProfileRoute.js");

dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());

//Routes
app.use("/user", UserRoute);
app.use("/login", UserLoginRoute);
app.use("/profile", UserProfileRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

