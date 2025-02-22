import {AppMiddleware} from "../types";

export const unless = (path: string[], mid: AppMiddleware, method?: string): AppMiddleware =>
  (req, res, next) => path.some((p) => p === req.path) && (!method || req.method.toLowerCase() === method.toLowerCase()) ? next() : mid(req, res, next);

