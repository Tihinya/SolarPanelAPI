import { Router } from "express";
import SignUp from "../controllers/auth/singUp";
import SignIn from "../controllers/auth/singIn";

const UserRouter = Router();

UserRouter.post("/signup", SignUp);
UserRouter.post("/signin", SignIn);
UserRouter.get("/user/information", SignIn);
UserRouter.delete("/user/delete", SignIn);
UserRouter.put("/user/update", SignIn);

export default UserRouter;
