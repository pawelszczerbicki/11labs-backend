import {Request} from "express"
import {Role} from "./permission";

export interface AuthRequest extends Request {
  user: AuthUser
}

export interface AuthUser {
  id: string
  email: string
  companyId: string
  roles?: Role[];
}
