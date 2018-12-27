import { NextFunction, Request, Response } from "express";

class CategoryController {
  public helloWorld = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      res.json({
        err: 0,
        msg: "",
        data: "Hello"
      });
    } catch (e) {
      return next(e);
    }
  };
}

export default new CategoryController();
