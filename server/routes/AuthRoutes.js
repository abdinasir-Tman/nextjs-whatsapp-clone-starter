import { Router } from "express";
import { checkUser } from "../controllers/AuthController.js";

const AuthRouters = Router();

AuthRouters.post("/check-user", checkUser);

export default AuthRouters;
