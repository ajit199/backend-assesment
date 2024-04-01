const { Router } = require("express");
const protected = require("../controllers/protected.controller.js");
const verifyJWT = require("../middlewares/auth.middleware.js");

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Authenticated Users
 *   description: Route for Authenticated Users only
 */

/**
 * @swagger
 * /api/v1/secure/protected-route:
 *   get:
 *     summary: Access protected route
 *     description: Access a protected route if user is authenticated
 *     tags: [Authenticated Users]
 *     security:
 *       - JWT: []
 *     responses:
 *       '200':
 *         description: User is authenticated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User is authenticated
 *       '401':
 *         description: Unauthorized request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Unauthorized request
 */

router.route("/protected-route").get(verifyJWT, protected);

module.exports = router;
