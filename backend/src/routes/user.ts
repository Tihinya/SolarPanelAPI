import { Router } from "express";
import { VerifyUser } from "../middleware/verifyUser";

import { SignUp } from "../controllers/auth/singUp";
import { SignIn } from "../controllers/auth/singIn";
import { GetUser } from "../controllers/user/getUser";
import { DeleteUser } from "../controllers/user/deleteUser";
import { UpdateUser } from "../controllers/user/updateUser";

const UserRouter = Router();

UserRouter.post("/signup", SignUp);
UserRouter.post("/signin", SignIn);
UserRouter.get("/information", VerifyUser, GetUser);
UserRouter.delete("/delete", VerifyUser, DeleteUser);
UserRouter.put("/update", VerifyUser, UpdateUser);

export default UserRouter;
