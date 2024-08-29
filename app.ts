import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

require("dotenv").config();
export const app = express();

// Body parser limit for cloudinary
app.use(express.json({ limit: "50mb" }));

// Cooke parser
app.use(cookieParser());

// CORS : Cross-Origin Resource Sharing
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

// Testing API
app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the API",
  });
});

// Unknown Route
app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});
