import express from "express";
import { dirname, join } from "path";
import route from "./routes/index.js";

const app = express();
// PORT DEFAULT
const PORT = 3000;

app.use(route);

// SHOW PORT SERVER
app.listen(process.env.PORT || PORT, ()=> {
    console.log("SERVER IN PORT:", process.env.PORT || PORT);
});

