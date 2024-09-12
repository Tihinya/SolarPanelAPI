import { SolarPanelRepo } from "../../models/data";
import { UserRepo } from "../../models/data";
import type { Request, Response, NextFunction } from "express";

export const getSolarPanelInformation = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { userId } = req.params;

    try {
        const user = await UserRepo.findOne({
            where: { id: userId },
            relations: ["solarPanels"],
        });

        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: "User not found." });
        }

        const solarPanels = user.solarPanels;

        if (!solarPanels || solarPanels.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No solar panels found for this user.",
            });
        }

        return res.status(200).json({
            success: true,
            solarPanels,
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message:
                error.message ||
                "An error occurred while retrieving solar panel information.",
        });
    }
};
