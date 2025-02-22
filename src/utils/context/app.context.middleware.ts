import {NextFunction, Response} from "express";
import {ContextProperties} from "./async.context";
import {AsyncLocalStorage} from "async_hooks";
import {AuthRequest} from "../../auth/auth";
import {logger} from "../logger";


export const getCompany = (localStorage: AsyncLocalStorage<ContextProperties>) => (req: AuthRequest, res: Response, next: NextFunction) => {
  if (!req.user?.companyId) {
    logger.error("No company", req.user)
    return res.status(401).send({error: 'Not authorized'})
  }

  localStorage.enterWith({companyId: req.user?.companyId, email: req.user.email});
  next();
};
