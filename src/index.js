import express from "express";
import { dirname, join } from "path";
import route from "./routes/index.js";

const app = express();
const PORT = 3000;

app.use(route);

app.listen(process.env.PORT || PORT, ()=> {
    console.log("SERVER IN PORT:", process.env.PORT || PORT);
});

