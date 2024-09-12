import { UserRepo } from "../../models/data";
import type { Request, Response } from "express";

/**
 * DeleteUser - Controller for deleting a user account
 * @param req - Request object from the client, expecting `userId` in the route parameters
 * @param res - Response object to send back to the client
 * @param next - Next function to handle any middleware errors
 * @returns void
 */
export const DeleteUser = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const user = await UserRepo.findOne({ where: { id: userId } });

        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: "User not found." });
        }

        await UserRepo.remove(user);

        return res.status(200).json({
            success: true,
            message: "User account deleted successfully.",
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message:
                error.message ||
                "An error occurred while deleting the user account.",
        });
    }
};
