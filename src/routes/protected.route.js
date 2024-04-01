const { Router } = require("express");
const protected = require("../controllers/protected.controller.js");
const verifyJWT = require("../middlewares/auth.middleware.js");

const router = Router();

router.route("/protected-route").get(verifyJWT, protected);

module.exports = router;
