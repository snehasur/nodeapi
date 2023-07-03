const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

const {
    getProducts,
    createProduct
      } = require("../controllers/productController");



router.route("/").get(getProducts).post(createProduct);

module.exports = router;