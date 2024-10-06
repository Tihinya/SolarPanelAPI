import { DataSourceOptions } from "typeorm";
import dotenv from "dotenv";
dotenv.config();

const config: DataSourceOptions = {
    type: "postgres",
    host: process.env.SOLAR_PANEL_POSTGRES_HOST,
    port: process.env.SOLAR_PANEL_POSTGRES_PORT
        ? parseInt(process.env.SOLAR_PANEL_POSTGRES_PORT, 10)
        : undefined,
    username: process.env.SOLAR_PANEL_POSTGRES_USER,
    password: process.env.SOLAR_PANEL_POSTGRES_PASSWORD,
    database: process.env.SOLAR_PANEL_DB,
};

export = config;
