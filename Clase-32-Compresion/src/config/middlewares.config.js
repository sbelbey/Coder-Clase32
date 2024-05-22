import __dirname from "../utils/dirnamePath.utils.js";
import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import handlebars from "express-handlebars";
import compression from "express-compression";

const middlewaresConfing = (app) => {
    app.use(compression({ brotli: { enabled: true } }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static("./src/public"));
    app.use(cookieParser());

    app.engine("handlebars", handlebars.engine());
    app.set("view engine", "handlebars");
    app.set("views", "./src/views");
};

export default middlewaresConfing;
