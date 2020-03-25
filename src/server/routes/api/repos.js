const routes = require("express").Router();
const fs = require("fs");
const path = require("path");
const request = require('superagent');

// mostrar los repositorios de un usuario
routes.get("/:username", async(req, res)=>{
    const {username} = req.params;

    let repos = await request.get(`https://api.github.com/users/${username}/repos`);
    res.status(200).json({
        status: "OK",
        result: repos.body
    });
})

// mostar los commits de un repositorio
routes.get("/commits/:username/:repo", async(req, res)=>{
    const {repo, username} = req.params;
    let users = await request.get(`https://api.github.com/repos/${username}/${repo}/commits`);
    res.status(200).json({
        status: "OK",
        result: users.body
    });
})

module.exports = routes;