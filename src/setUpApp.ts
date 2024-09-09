import "reflect-metadata";
import express from "express";

import dotenv from "dotenv";
dotenv.config();
const { COOKIE_SECRET } = process.env;

import cors from "cors";
import cookieParser from "cookie-parser";
import UserRouter from "./routes/user";
import SolarPanelsRouter from "./routes/solarPanels";
// import ConnectDatabase from "./models/dbConnection";
import yamljs from "yamljs";
import { serve, setup } from "swagger-ui-express";
const swaggerDocument = yamljs.load("./swagger.yaml");

const setUpApp = async () => {
    const app = express();

    app.use(cors({ origin: "*" }));
    app.use(cookieParser(COOKIE_SECRET!));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/api-docs", serve, setup(swaggerDocument));

    app.use("/api/solarPanels", SolarPanelsRouter);
    app.use("/api/user", UserRouter);

    app.get("/", (_req, res) => {
        res.status(200).json({
            message: "Hello, you are on the SolarPanelAPI root.",
        });
    });

    // await ConnectDatabase();

    return app;
};

export default setUpApp;
