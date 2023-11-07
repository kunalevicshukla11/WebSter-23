import express from "express";
import mongoose from "mongoose";import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

//configure env
dotenv.config();

const app = express();

//middleware...
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

//databse connection...
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL, {
      dbName: "Webster",
    });
    console.log(
      `Connected to Mongodb database : ${connect.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`Error in mongoDB ${error}`.bgRed.white);
  }
};
connectDB();

//user-admin route...
app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send({
    message: "welcome to Webster'2k23 app",
  });
});

const PORT = process.env.PORT;
//listening the app
app.listen(PORT, () => {
  console.log(
    `server is running on ${process.env.DEV} on port :${PORT}`.bgCyan.white
  );
});
