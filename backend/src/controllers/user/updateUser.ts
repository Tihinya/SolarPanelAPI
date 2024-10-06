import bcryptjs from "bcryptjs";
import { UserRepo } from "../../models/data";
import { TUpdateFrom } from "../../types/types";
import type { Request, Response } from "express";

/**
 * UpdateUser - Controller for updating a user's information (email, password, and name)
 * @param req - Request object from the client, expecting `userId` in the route parameters and updated user data in the body
 * @param res - Response object to send back to the client with the updated user data
 * @param next - Next function to handle any middleware errors
 * @returns void
 */
export const UpdateUser = async (req: Request, res: Response) => {
    const { userId } = req.params;
    const { email, password, name } = req.body as TUpdateFrom;

    try {
        const user = await UserRepo.findOne({ where: { id: userId } });

        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: "User not found." });
        }

        if (email) {
            user.email = email;
        }

        if (password) {
            user.password = bcryptjs.hashSync(
                password,
                bcryptjs.genSaltSync(10),
            );
        }

        if (name) {
            user.name = name;
        }

        await UserRepo.save(user);

        return res.status(200).json({
            success: true,
            message: "User information updated successfully.",
            user: {
                id: user.id,
                fullName: user.name,
                email: user.email,
            },
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message:
                error.message ||
                "An error occurred while updating user information.",
        });
    }
};
