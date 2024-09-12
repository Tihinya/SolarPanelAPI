import { SolarPanelRepo } from "../../models/data";
import type { Request, Response } from "express";

export const GetPerformanceEstimate = async (req: Request, res: Response) => {
    const { panelId } = req.params;

    try {
        const panel = await SolarPanelRepo.findOne({ where: { id: panelId } });

        if (!panel) {
            return res
                .status(404)
                .json({ success: false, message: "Solar panel not found." });
        }

        // For simplicity, assume performance estimate is based on panel capacity (kW * avg sunlight hours)
        const averageSunlightHours = 5; // Example value
        const estimatedPerformance = panel.capacity * averageSunlightHours;

        return res.status(200).json({
            success: true,
            estimatedPerformance,
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message:
                error.message ||
                "An error occurred while estimating performance.",
        });
    }
};
