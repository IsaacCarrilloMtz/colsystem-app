import { Router } from "express";

const route = Router();

route.get('/', (req, res) =>{
    res.send("Welcome to my page!");
});

route.get('/about', (req, res) => {
    res.send("About");
});

route.get('/contact', (req, res) => {
    res.send("Contact");
});

export default route;