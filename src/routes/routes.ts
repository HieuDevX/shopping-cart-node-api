import * as express from "express";
import ProductController from "../controllers/product.controller";
import CategoryController from "../controllers/category.controller";

const router = express.Router();

// Route

router.route("/categories").get(CategoryController.getAllCategories);
router.route("/categories/:id").get(CategoryController.getCategoryById);

router.route("/products").get(ProductController.getAllProducts);
router.route("/products/:productId").get(ProductController.getProductById);
router
  .route("/products/byCategory/:categoryId")
  .get(ProductController.getProductsByCategoryId);

router.route("/webproducts").get(ProductController.getAllWebProducts);
router.route("/webproducts/:productId").get(ProductController.getWebProductById);
router
  .route("/webproducts/byCategory/:categoryId")
  .get(ProductController.getWebProductsByCategoryId);

export default router;
