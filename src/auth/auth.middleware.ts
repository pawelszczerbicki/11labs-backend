import {Permission, Role, roleToPermission} from "./permission";
import {NextFunction, Response} from "express";
import {AccessForbiddenError} from "../error/error.handler";
import {AuthRequest} from "./auth";
import admin from "firebase-admin";
import {logger} from "../utils/logger";

export const has =
  (permissions: Permission[]) => (req: AuthRequest, _res: Response, next: NextFunction) => isAllowed(permissions, req.user?.roles) ? next() : next(new AccessForbiddenError());

const isAllowed = (permissions: Permission[], r?: Role[]) =>
  permissions.every((p) => r && mapRolesToPermissions(r)?.includes(p));

export const mapRolesToPermissions = (roles: Role[]) => {
  const permissions = roles.map((role) => roleToPermission[role]).filter(Boolean);

  return Array.from(new Set(permissions.flat()));
};

export const auth = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).send({error: 'Not authorized'})
    const user = await admin.auth().verifyIdToken(token)
    req.user = {email: user.email, id: user.uid, companyId: user.companyId}
    next()
  } catch (e) {
    logger.error("Can not auth user", e)
    res.status(401).send({error: 'Not authorized'})
  }
}