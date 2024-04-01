const { Router } = require("express");
const getData = require("../controllers/getData.controller.js");
const { verifyJWT } = require("../middlewares/auth.middleware.js");

const router = Router();

router.route("/getData").get(getData);
// router.route("/login").post(loginUser);

// //secured routes
// router.route("/logout").post(verifyJWT, logoutUser);

module.exports = router;
