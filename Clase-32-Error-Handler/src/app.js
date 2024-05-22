import createExpressApp from "./config/createApp.js";
import middlewaresConfing from "./config/middlewares.config.js";
import apiRouter from "./routes/apiRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";

// CREATE EXPRESS APP
const app = createExpressApp();

// SETUP GLOBAL MIDDLEWARES
middlewaresConfing(app);

// SET ROUTES
app.use("/api/v1", apiRouter);

app.use(errorHandler);
