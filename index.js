import { fileURLToPath } from 'url';
import { dirname } from "path";
import express from 'express';
import { randomTetoMusic } from './src/scripts/scripts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.get("/pages/:pageName", (req, res) => {
    res.sendFile(`${__dirname}/src/pages/${req.params.pageName}.html`);
})

app.get("/img/:imgName", (req, res) => {
    res.sendFile(`${__dirname}/src/img/${req.params.imgName}.jpg`);
})

app.get("/styles/:styleName", (req, res) => {
    res.sendFile(`${__dirname}/src/styles/${req.params.styleName}.css`);
})

app.get("/random-teto-music", (req, res) => {
    res.send(randomTetoMusic());
})


app.listen(80, () => {
    console.log("server is running on 127.0.0.1:3000")
})

// () => {}