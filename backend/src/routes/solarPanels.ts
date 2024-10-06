import { Router } from "express";
import { SignUp } from "../controllers/auth/singUp";
import { SignIn } from "../controllers/auth/singIn";
import { VerifyUser } from "../middleware/verifyUser";

const SolarRouter = Router();

SolarRouter.get("/solar-panels/information", VerifyUser, SignIn);
SolarRouter.get("/performance/estimate", VerifyUser, SignUp);
SolarRouter.post("/performance/monitor", VerifyUser, SignIn);
SolarRouter.get("/performance/history", VerifyUser, SignIn);
SolarRouter.get("/carbon-footprint", VerifyUser, SignIn);

export default SolarRouter;
