import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

//protected routes token base
//req er por next validate hobe then res send hobe
// next er maddhome authenticate user ke validate korbo
export const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      // learn more //
      req.headers.authorization,
      process.env.JWT_SECRET
    ); //token headers e thake
    req.user = decode; // req. user e decode pass koracchi // decrypt
    next();
  } catch (error) {
    console.log(error);
  }
};

// admin access
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      message: "Error in admin middleware",
    });
  }
};
