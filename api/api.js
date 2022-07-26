const path = require("path");

const express = require("express");

const apiController = require("../controllers/api");
const verifyJWT = require("./verifyToken");

const router = express.Router();

router.post("/post-tracking", verifyJWT, apiController.postAddProduct);
router.get("/products", apiController.getProducts);
router.post("/generate-token", apiController.postAuth);

module.exports = router;
