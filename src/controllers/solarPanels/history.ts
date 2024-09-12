import { PerformanceRepo } from "../../models/data";
import type { Request, Response, NextFunction } from "express";

export const getPerformanceHistory = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { panelId } = req.params;

    try {
        const history = await PerformanceRepo.find({
            where: { solarPanel: { id: panelId } },
        });

        if (!history || history.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No performance history found.",
            });
        }

        return res.status(200).json({
            success: true,
            history,
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message:
                error.message ||
                "An error occurred while retrieving performance history.",
        });
    }
};
