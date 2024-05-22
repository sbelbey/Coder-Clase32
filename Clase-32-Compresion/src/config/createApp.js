import express from "express";
import MongoManager from "../dao/db/mongo.manager.js";
import constants from "../config/constants.config.js";

const createExpressApp = () => {
    const { PORT } = constants;
    const app = express();
    // MongoManager.connect();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

    return app;
};

export default createExpressApp;
