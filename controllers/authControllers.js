import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";
// import User from "../models/userModel.js";
import { comparePaswd, hashPasswd } from "./../utils/authHelper.js";
//------------Register --------
export const regControllers = async (req, res) => {
  try {
    //getting requesting data from body
    const { emailId, password, phoneno } = req.body;
    //validation
    if (!password || !emailId || !phoneno) {
      return res.send({ message: "All fields are neccesary" });
    }

    //check weather a user exist
    const userExist = await userModel.findOne({ emailId });
    if (userExist) {
      return res.status(200).send({
        success: false,
        message: "Already Registered please login",
      });
    }
    //register user if usernotexist
    const hashedPasswd = await hashPasswd(password);
    console.log(hashedPasswd);
    //save
    const regUser = await new userModel({
      emailId,
      password: hashedPasswd,
      phoneno,
    }).save();
    res.status(201).send({
      success: true,
      message: "Registered succesfully",
      regUser,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Not registered due to internal issue",
    });
  }
};

//-------------LogIN Controller method:post----------//
export const loginController = async (req, res) => {
  try {
    const { emailId, password } = req.body;
    console.log(password);
    if (!emailId || !password) {
      res.status(404).send({
        success: false,
        message: "Inavlid Credentials",
      });
    }
    //validate if user exist or not
    const userValid = await userModel.findOne({ emailId });
    if (!userValid) {
      res.status(404).send({
        success: false,
        message: "user not registered",
      });
    }
    const match = await comparePaswd(password, userValid.password);
    if (!match) {
      res.status(200).send({
        success: false,
        message: "Invalid Password please enter correct password",
      });
    } else {
      //JWT token
      const token = await JWT.sign(
        { _id: userValid._id },
        process.env.JWT_KEY,
        {
          expiresIn: "7d",
        }
      );
      res.status(200).send({
        success: true,
        message: "login Sucessfully",

        token,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({
      success: false,
      message: "Error in Login",
    });
  }
};
