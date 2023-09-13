import express from "express";
import {
  regControllers,
  loginController,
} from "../controllers/authControllers.js";
const router = express.Router();
//routing imple
//register (method:post)
router.post("/register", regControllers);
export default router;

//login route method POST
router.post("/login", loginController);
