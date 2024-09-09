import { DB } from "./data";

const ConnectDatabase = async (): Promise<void> => {
    try {
        await DB.initialize();
        console.log("Data Source has been initialized!");
    } catch (error) {
        console.error("Error during Data Source initialization:", error);
        process.exit(1);
    }
};

export default ConnectDatabase;
