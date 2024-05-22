import mongoose from "mongoose";
import constants from "../../config/constants.config.js";

export default class MongoManager {
    static #instance = null;

    constructor() {
        const { MONGO_URI } = constants;
        if (!MONGO_URI) {
            throw new Error("MONGO_URI is not defined");
        }

        mongoose.connect(MONGO_URI);

        const db = mongoose.connection;

        db.on("error", (error) => {
            console.log(`DB connection failed: ${error}`);
            throw error;
        });

        db.once("open", () => {
            console.log("DB connected");
        });
    }
    static connect() {
        if (!MongoManager.#instance) {
            MongoManager.#instance = new MongoManager();
        }

        return MongoManager.#instance;
    }
}
