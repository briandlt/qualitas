const routes = require("express").Router();

// muestra la vista al cargar la pagina
routes.get("/", (req, res) => res.sendFile("index.html", {root: "public"}));

module.exports = routes;