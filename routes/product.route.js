const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller.js");
const auth = require("../middleware/auth.js");
const verifyToken = require("../middleware/verifyToken.js");

router
  .route("/")
  .get(productController.getProduct)
  .post(productController.createProduct);

router
  .route("/:id")
  .get(productController.getProductById)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

router.post("/:productId/comment", productController.addCommand);

module.exports = router;
