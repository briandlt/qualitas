const routes = require("express").Router();
const fs = require("fs");
const path = require("path");
const request = require('superagent');

routes.get("/", async(req, res)=>{
    let users = await request.get("https://api.github.com/users");
    res.status(200).json({
        status: "OK",
        result: users.body
    });
})

routes.get("/:username", async(req, res)=>{
    const {username} = req.params;

    fs.readFile(path.resolve(__dirname, '../../../../user.json') , 'utf8', (err, file) => {
        const user = JSON.parse(file);
        res.status(200).json({
            status: "OK",
            result: user
        });
    } );

    // const users = request.get(`https://api.github.com/users/${username}`);
    // res.status(200).json({
    //     status: "OK",
    //     result: users.body
    // });
})

module.exports = routes;