import { NextFunction, Request, Response } from "express";
import Logger from "../custom_modules/helpers/log/logger";
import * as mongoose from "mongoose";
import Exception from "../custom_modules/exceptions/Exception";
import Category from "../models/category.model";
import logger from "../custom_modules/helpers/log/logger";

class CategoryController {
  public getAllCategories = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const docs = await Category.find();

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

  public getCategoryById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(new Exception("Bad request", 400));
    }

    try {
      const docs = await Category.findById(id);

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

export default new CategoryController();
