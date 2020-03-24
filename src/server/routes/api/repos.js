const routes = require("express").Router();
const fs = require("fs");
const path = require("path");
const request = require('superagent');

routes.get("/:username", async(req, res)=>{
    const {username} = req.params;

    let repos = await request.get(`https://api.github.com/users/${username}/repos`);
    res.status(200).json({
        status: "OK",
        result: repos.body
    });
})

routes.get("/commits/:username/:repo", async(req, res)=>{
    const {repo, username} = req.params;
    
    // fs.readFile(path.resolve(__dirname, '../../../../commits.json') , 'utf8', (err, file) => {
    //     let user = JSON.parse(file);
    //     res.status(200).json({
    //         status: "OK",
    //         result: user
    //     });
    // } );

    let users = await request.get(`https://api.github.com/repos/${username}/${repo}/commits`);
    res.status(200).json({
        status: "OK",
        result: users.body
    });
})

module.exports = routes;