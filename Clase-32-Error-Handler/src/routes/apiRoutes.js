import { Router } from "express";
import HerosManager from "../manager/herosManager.js";
import { CustomError } from "../utils/customError.utils.js";
import { errorTypes } from "../utils/errorTypes.utils.js";
import { validateHero } from "../utils/herosError.js";

const apiRouter = Router();

const herosManager = new HerosManager();

apiRouter.get("/", (req, res) => {
    // consolo.log(hola);
    let heros = herosManager.getHeros();
    res.status(200).send({ heros });
});

apiRouter.post("/", (req, res) => {
    let { name } = req.body;
    if (!name) {
        throw CustomError.CustomError(
            "Missing Data",
            "Enter the property name",
            errorTypes.ERROR_INVALID_ARGUMENTS,
            validateHero(req.body)
        );
        // res.setHeader("Content-Type", "application/json");
        // return res.status(400).json({ error: `Complete at least the name` });
    }

    let validProps = ["name", "alias", "publisher", "powers", "team"];
    let newHeroProps = Object.keys(req.body);
    let valid = newHeroProps.every((prop) => validProps.includes(prop));

    if (!valid) {
        res.setHeader("Content-Type", "application/json");
        return res.status(400).json({
            error: `You have entered invalid properties`,
            detalle: validProps,
        });
    }

    let heros = herosManager.getHeros();
    let exist = heros.find(
        (heroe) => heroe.name.toLowerCase() === name.toLowerCase()
    );
    if (exist) {
        res.setHeader("Content-Type", "application/json");
        return res
            .status(400)
            .json({ error: `The hero ${name} is already registered` });
    }

    let id = 1;
    if (heros.length > 0) {
        id = heros[heros.length - 1].id + 1;
    }

    let newHero = herosManager.createHero({ id, ...req.body });

    res.setHeader("Content-Type", "application/json");
    return res.status(201).json({ payload: newHero });
});

export default apiRouter;
