import { Router } from "express";
import zlib from "zlib";

const apiRouter = Router();

apiRouter.get("/", (req, res) => {
    res.send("Hello World!");
});

apiRouter.get("/longText", (req, res) => {
    let longText = "Text muyyyyy largo ...".repeat(100000);

    // let compressText = zlib.deflateSync(longText, { level: 9 });
    let compressText = zlib.brotliCompressSync(longText, {
        params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 1 },
    });
    console.log(
        "Tamaño del texto sin comprimir:",
        Buffer.from(longText).byteLength
    );
    console.log(
        "Tamaño del texto comprimido en BROTLI:",
        Buffer.from(compressText).byteLength
    );

    res.setHeader("Content-Type", "text/plain");
    // res.setHeader("Content-Encoding", "deflate");
    // res.setHeader("Content-Encoding", "gzip");
    res.setHeader("Content-Encoding", "br");
    res.status(200).send(compressText);
});

apiRouter.get("/prueba", (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.status(200).render("prueba");
});

export default apiRouter;
