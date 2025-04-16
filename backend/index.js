import express, { application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./config/dbConnection.js";
import userRoutes from "./routes/user.routes.js";
import companyRoutes from "./routes/company.routes.js";
dotenv.config();
const app = express();
// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

app.use("/api/user", userRoutes);
app.use("/api/company", companyRoutes);

const PORT = process.env.PORT || 3000;
// api endpoints

app.listen(PORT, () => {
  connectDB();
  console.log("connected to mongodb");
  console.log(`server is running ${PORT}`);
});
