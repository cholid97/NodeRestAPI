const path = require("path");

const express = require("express");

const apiController = require("../controllers/api");

const router = express.Router();

router.post("/post-product/:params", apiController.postAddProduct);

module.exports = router;
