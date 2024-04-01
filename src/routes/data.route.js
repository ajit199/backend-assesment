const { Router } = require("express");
const getData = require("../controllers/getData.controller.js");

const router = Router();

router.route("/getData").get(getData);

module.exports = router;
