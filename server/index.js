import express from "express";
import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import customErrorHandler from "./error/errorHandler.js";
import compRoutes from "./routes/complaintRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import expRoutes from "./routes/expenseRoutes.js"
import voteRoutes from "./routes/voteRoutes.js";

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
//compliant..
app.use("/api/v1/comp", compRoutes);

// expense ...
app.use("/api/v1/exp",expRoutes);
//comment..
app.use("/api/v1/comment", commentRoutes);

//votes..
app.use("/api/v1/vote", voteRoutes);

app.get("/", (req, res) => {
  res.send({
    message: "welcome to Webster'2k23 app",
  });
});

app.use(customErrorHandler);

const PORT = process.env.PORT;
//listening the app
app.listen(PORT, () => {
  console.log(
    `server is running on ${process.env.DEV} on port :${PORT}`.bgCyan.white
  );
});
