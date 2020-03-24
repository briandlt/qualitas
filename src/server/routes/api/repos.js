const routes = require("express").Router();
const fs = require("fs");
const path = require("path");

routes.get("/:username", async(req, res)=>{
    const {username} = req.params;
    fs.readFile(path.resolve(__dirname, '../../../../repos.json') , 'utf8', (err, file) => {
        let repos = JSON.parse(file);
        res.status(200).json({
            status: "OK",
            result: repos
        });
    } );

    // let repos = await axios.get(`https://api.github.com/users/${username}/repos`);
    // res.status(200).json({
    //     status: "OK",
    //     result: repos
    // });
})

routes.get("/commits/:username/:repo", async(req, res)=>{
    const {repo, username} = req.params;
    
    fs.readFile(path.resolve(__dirname, '../../../../commits.json') , 'utf8', (err, file) => {
        let user = JSON.parse(file);
        res.status(200).json({
            status: "OK",
            result: user
        });
    } );

    // let users = await axios.get(`https://api.github.com/repos/${username}/${repo}/commits`);
    // res.status(200).json({
    //     status: "OK",
    //     result: users
    // });
})

module.exports = routes;