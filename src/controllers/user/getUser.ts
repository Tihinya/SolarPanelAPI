import { UserRepo } from "../../models/data";
import type { Request, Response } from "express";

/**
 * GetUser - Controller for retrieving a user's information
 * @param req - Request object from the client, expecting `userId` in the route parameters
 * @param res - Response object to send back to the client with user information
 * @param next - Next function to handle any middleware errors
 * @returns void
 */
export const GetUser = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const user = await UserRepo.findOne({
            where: { id: userId },
            select: ["id", "email", "name"],
        });

        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: "User not found." });
        }

        return res.status(200).json({
            success: true,
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
                "An error occurred while retrieving user information.",
        });
    }
};
