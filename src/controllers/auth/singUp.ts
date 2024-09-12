import bcryptjs from "bcryptjs";
import { UserRepo } from "../../models/data";
import { TSignupForm } from "../../types/types";
import type { Request, Response } from "express";

/**
 * UserSignUp - Controller for creating a New User Account
 * @param req - Request Object from the Client
 * @param res - Response Object to reply to Client
 * @returns void
 */
export const SignUp = async (req: Request, res: Response) => {
    const { name, email, password, passwordConfirmation } =
        req.body as TSignupForm;

    if (!name || !email || !password || !passwordConfirmation) {
        return res
            .status(400)
            .json({ success: false, messagse: "All fields are required." });
    }

    try {
        const hashedPassword = bcryptjs.hashSync(
            password,
            bcryptjs.genSaltSync(10),
        );

        const existingUser = await UserRepo.findOne({
            where: { email },
        });

        if (existingUser) {
            return res
                .status(400)
                .json({ success: false, message: "User already exists." });
        }

        const newUser = UserRepo.create({
            email,
            password: hashedPassword,
            name,
        });

        await UserRepo.save(newUser);

        return res.status(201).json({
            success: true,
            message: "User account created successfully.",
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message:
                error.message ||
                "An error occurred while creating the account.",
        });
    }
};
