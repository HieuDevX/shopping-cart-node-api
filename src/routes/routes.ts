import * as express from "express";
import ProductController from "../controllers/product.controller";
import CategoryController from "../controllers/category.controller";

const router = express.Router();

// Route

router.route("/categories").get(CategoryController.helloWorld);

router.route("/products").get(ProductController.helloWorld);

export default router;
