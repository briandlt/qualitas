const routes = require("express").Router();
const fs = require("fs");
const path = require("path");

routes.get("/", async(req, res)=>{
    fs.readFile(path.resolve(__dirname, '../../../../users.json') , 'utf8', (err, file) => {
        let users = JSON.parse(file);
        res.status(200).json({
            status: "OK",
            result: users
        });
    } );
    // let users = await axios.get("https://api.github.com/users");
    // res.status(200).json({
    //     status: "OK",
    //     result: users
    // });
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

    // const users = await axios.get(`https://api.github.com/users/${username}`);
    // res.status(200).json({
    //     status: "OK",
    //     result: users
    // });
})

module.exports = routes;