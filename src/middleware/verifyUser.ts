import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { UserRepo } from "../models/data";

// Extending the Request interface to include a custom 'user' field
interface AuthenticatedRequest extends Request {
    user?: { id: string; email: string }; // Add any other fields as necessary
}

export const VerifyUser = async (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction,
) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "No token provided in the Authorization Header",
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string,
        ) as jwt.JwtPayload;

        const user = await UserRepo.findOne({ where: { id: decoded.userId } });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        req.user = { id: user.id, email: user.email };

        return next();
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(401).json({
                success: false,
                message: "Token has expired. Please sign in again.",
            });
        }
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized access. Invalid token provided.",
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
