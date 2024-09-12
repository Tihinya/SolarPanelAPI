import { CarbonFootprintRepo } from "../../models/data";

import { UserRepo } from "../../models/data";
import type { Request, Response, NextFunction } from "express";

export const GetCarbonFootprint = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const user = await UserRepo.findOne({
            where: { id: userId },
            relations: ["carbonFootprints"],
        });

        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: "User not found." });
        }

        // Assuming carbonFootprints is an array of reductions
        const carbonFootprintData = user.carbonFootprints;

        return res.status(200).json({
            success: true,
            data: carbonFootprintData,
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message:
                error.message ||
                "An error occurred while retrieving carbon footprint data.",
        });
    }
};
