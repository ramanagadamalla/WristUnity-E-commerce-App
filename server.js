//since we used type:module of es6 in package.json(type) way of importing will changes  // const express = require("express");
import express from "express";
import dotenv, { config } from "dotenv";
import { MongoClient } from "mongodb";
import dbConnect from "./config/mongodb.js";
import authRoutes from "./routes/authRoutes.js";
import morgan from "morgan";
import cors from "cors";

dotenv.config();
//Mongodb config
dbConnect();
//express
const app = express();
//json parser for incoming data
app.use(express.json());
//middlewares
app.use(morgan("dev"));
// cors config
const corsOptions = {
  origin: "http://localhost:3000",
};

// Enable CORS with the specified options
app.use(cors(corsOptions));

//routes
app.use("/api/v1/auth", authRoutes);

//rest api creation
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to WristUnity</h1>");
// });
const PORT = process.env.PORTNO;
app.listen(PORT, () => {
  console.log(`Server working on ${PORT} on  ${process.env.DEV_MODE}`);
});
