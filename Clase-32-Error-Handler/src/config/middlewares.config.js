import __dirname from "../utils/dirnamePath.utils.js";
import path from "path";
import express from "express";
import cookieParser from "cookie-parser";

const middlewaresConfing = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, "src", "public")));
    app.use(cookieParser());
};

export default middlewaresConfing;
