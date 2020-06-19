/**
 * 
 * Root Router
 * 
 */

const { Router } = require("express");
const router = new Router();

router.get("/", (req, res) => {
    res.render("root/index");
})

module.exports = router;