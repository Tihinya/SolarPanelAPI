import { Router } from "express";
import SignUp from "../controllers/auth/singUp";
import SignIn from "../controllers/auth/singIn";

const SolarRouter = Router();

SolarRouter.get("/solar-panels/information", SignIn);
SolarRouter.get("/performance/estimate", SignUp);
SolarRouter.post("/performance/monitor", SignIn);
SolarRouter.get("/performance/history", SignIn);
SolarRouter.get("/carbon-footprint", SignIn);

export default SolarRouter;
