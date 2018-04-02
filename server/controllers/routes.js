const express = require("express")
const router  = express.Router()

router.get("/", (req, res) => res.render("home")) // render view
router.all("/api/registry", require("./api.js"))  // fetch api routes

module.exports = router