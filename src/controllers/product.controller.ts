import { NextFunction, Request, Response } from "express";
import Logger from "../custom_modules/helpers/log/logger";
import * as mongoose from "mongoose";
import Exception from "../custom_modules/exceptions/Exception";
import Product from "../models/product.model";
import logger from "../custom_modules/helpers/log/logger";

class ProductController {
  public getAllProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const docs = await Product.find({}, 'image _id name price status description imageSub categoryId');

      logger.info(`Data: `);
      logger.info(docs);

      const responseJSON = { data: docs };
      return res.status(200).send(responseJSON);
    } catch (error) {
      logger.error(`Failed to get data: `);
      logger.error(error);
      return next(error);
    }
  };

  public getProductById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { productId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return next(new Exception("Bad request", 400));
    }

    try {
      const docs = await Product.findById(productId, 'image _id name price status description imageSub categoryId');

      logger.info(`Data: `);
      logger.info(docs);

      if (docs === null) {
        return next(new Exception("Not found", 404));
      }

      const responseJSON = { data: docs };
      return res.status(200).send(responseJSON);
    } catch (error) {
      logger.error(`Failed to get data: `);
      logger.error(error);
      return next(error);
    }
  };

  public getProductsByCategoryId = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { categoryId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      return next(new Exception("Bad request", 400));
    }

    try {
      const docs = await Product.find({ categoryId: categoryId }, 'image _id name price status description imageSub categoryId');

      logger.info(`Data: `);
      logger.info(docs);

      if (docs === null) {
        return next(new Exception("Not found", 404));
      }

      const responseJSON = { data: docs };
      return res.status(200).send(responseJSON);
    } catch (error) {
      logger.error(`Failed to get data: `);
      logger.error(error);
      return next(error);
    }
  };

  public getAllWebProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const docs = await Product.find();

      logger.info(`Data: `);
      logger.info(docs);

      const responseJSON = { data: docs };
      return res.status(200).send(responseJSON);
    } catch (error) {
      logger.error(`Failed to get data: `);
      logger.error(error);
      return next(error);
    }
  };

  public getWebProductById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { productId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return next(new Exception("Bad request", 400));
    }

    try {
      const docs = await Product.findById(productId);

      logger.info(`Data: `);
      logger.info(docs);

      if (docs === null) {
        return next(new Exception("Not found", 404));
      }

      const responseJSON = { data: docs };
      return res.status(200).send(responseJSON);
    } catch (error) {
      logger.error(`Failed to get data: `);
      logger.error(error);
      return next(error);
    }
  };

  public getWebProductsByCategoryId = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { categoryId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      return next(new Exception("Bad request", 400));
    }

    try {
      const docs = await Product.find({ categoryId: categoryId });

      logger.info(`Data: `);
      logger.info(docs);

      if (docs === null) {
        return next(new Exception("Not found", 404));
      }

      const responseJSON = { data: docs };
      return res.status(200).send(responseJSON);
    } catch (error) {
      logger.error(`Failed to get data: `);
      logger.error(error);
      return next(error);
    }
  };
}

export default new ProductController();
