import dotenv from "dotenv";

dotenv.config();

export default {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || "development",
    MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/clase32",
};
