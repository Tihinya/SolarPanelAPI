import { DataSource } from "typeorm";
import config from "./config/config";

export const DB = new DataSource(config);
