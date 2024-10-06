import { PerformanceRepo } from "../../models/data";
import { SolarPanelRepo } from "../../models/data";
import type { Request, Response } from "express";

export const monitorPerformance = async (req: Request, res: Response) => {
    const { panelId, energyGenerated, date } = req.body;

    try {
        const panel = await SolarPanelRepo.findOne({ where: { id: panelId } });

        if (!panel) {
            return res
                .status(404)
                .json({ success: false, message: "Solar panel not found." });
        }

        const performance = PerformanceRepo.create({
            solarPanel: panel,
            energyGenerated,
            date: new Date(date),
        });

        await PerformanceRepo.save(performance);

        return res.status(201).json({
            success: true,
            message: "Performance logged successfully.",
            performance,
        });
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message:
                error.message ||
                "An error occurred while monitoring performance.",
        });
    }
};
