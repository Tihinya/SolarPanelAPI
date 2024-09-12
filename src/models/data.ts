import { DataSource } from "typeorm";
import config from "./config/config";
import { User } from "./entities/user.entity";
import { Performance } from "./entities/performance.entity";
import { SolarPanel } from "./entities/solarPanel.entity";
import { CarbonFootprint } from "./entities/carbonFootprint.entity";

export const DB = new DataSource(config);

const UserRepo = DB.getRepository(User);
const PerformanceRepo = DB.getRepository(Performance);
const SolarPanelRepo = DB.getRepository(SolarPanel);
const CarbonFootprintRepo = DB.getRepository(CarbonFootprint);

export { UserRepo, PerformanceRepo, CarbonFootprintRepo, SolarPanelRepo };
