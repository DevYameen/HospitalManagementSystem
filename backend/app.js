import { config } from "dotenv";
config();  // Make sure this is called before any other imports
import express from "express";
import { dbConnection } from "./database/dbConnection.js";

import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/error.js";
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";

const app = express();

// Load environment variables from .env file
config({ path: "./config/config.env" });

const allowedOrigins = [process.env.FRONTEND_URI, process.env.DASHBOARD_URI].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins, 
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true, 
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

// Call the function to connect to the database
dbConnection();

// Handle OPTIONS requests for preflight
app.options('*', cors());

app.use(errorMiddleware);

export default app;
