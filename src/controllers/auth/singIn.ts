import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { UserRepo } from "../../models/data";
import { TSigninForm } from "../../types/types";

import type { Request, Response } from "express";

/**
 * UserSignIn - Controller for Signing In a User
 * @param req - Request Object from the Client
 * @param res - Response Object to reply to Client
 * @returns an object of appropriate response
 */
export const SignIn = async (req: Request, res: Response) => {
    const { email, password } = req.body as TSigninForm;

    if (!email || !password) {
        return res
            .status(400)
            .json({ success: false, message: "All fields are required." });
    }

    try {
        const user = await UserRepo.findOne({
            where: { email },
            select: ["id", "email", "name", "password"],
        });

        if (!user) {
            return res
                .status(401)
                .json({ success: false, message: "Invalid email or password" });
        }

        const isPasswordValid = bcryptjs.compareSync(password, user.password);

        if (!isPasswordValid) {
            return res
                .status(401)
                .json({ success: false, message: "Invalid email or password" });
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET as string,
            { expiresIn: "1h" },
        );

        return res.status(200).json({
            success: true,
            message: "User signed in successfully",
            token,
            user: { fullName: user.name, email: user.email },
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message || "An error occurred during sign-in",
            token: null,
            user: null,
        });
    }
};
