import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import pingRoute from "./routes/pingRoute.js";
import blogsRoute from "./routes/blogsRoute.js";
import eventsRoute from "./routes/eventsRoute.js";
const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

mongoose
  .connect(process.env.Mongo_Url)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log("Error connecting to database", error);
  });

app.use(bodyParser.json());
app.use(cors());
app.use("/user", userRoute);
app.use("/", pingRoute);
app.use("/blogs", blogsRoute);
app.use("/events", eventsRoute);
app.listen(process.env.PORT || 3000);
