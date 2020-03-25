const routes = require("express").Router();
const fs = require("fs");
const path = require("path");
const request = require('superagent');

// mostrar todos los usuarios
routes.get("/", async(req, res)=>{
    let users = await request.get("https://api.github.com/users");
    res.status(200).json({
        status: "OK",
        result: users.body
    });
})

// mostar mas informacion del usuario como el email y direccion de su perfil en github
routes.get("/:username", async(req, res)=>{
    const {username} = req.params;

    const user = await request.get(`https://api.github.com/users/${username}`);
    res.status(200).json({
        status: "OK",
        result: user.body
    });
})

module.exports = routes;