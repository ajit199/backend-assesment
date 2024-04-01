const { Router } = require("express");
const getData = require("../controllers/getData.controller.js");

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Data
 *   description: get public api data
 */

/**
 * @swagger
 * /api/v1/data/getData:
 *   get:
 *     summary: Get data
 *     description: Retrieve data with optional filtering options
 *     tags: [Data]
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Category to filter the data
 *       - in: query
 *         name: skip
 *         schema:
 *           type: integer
 *         description: Number of items to skip
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Maximum number of items to return
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: [{'data1'}, {'data2'}, {'data3'}]
 *                 count:
 *                   type: integer
 *                   example: 3
 *       '404':
 *         description: No data found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: No data found
 */

router.route("/getData").get(getData);

module.exports = router;
