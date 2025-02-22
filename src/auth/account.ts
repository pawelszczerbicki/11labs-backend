import {AuthUser} from "./auth";

export interface Account {
  id: string
  authId?: string
  email: string
  companyIds: string[]
  type: AccountType
  // roles?: Role[];
}

export interface AccountUpsert {
  authId?: string
  email: string
  type: AccountType
}

export enum AccountType {
  USER = 'USER',
  CLIENT = 'CLIENT',
}

export const toAccountUpdate = (email: string, type: AccountType): AccountUpsert => ({email, type})

export const toClientAccount = (user: AuthUser): AccountUpsert => toAccount(user, AccountType.CLIENT);
export const toUserAccount = (user: AuthUser): AccountUpsert => toAccount(user, AccountType.USER);

export const toAccount = (user: AuthUser, type: AccountType): AccountUpsert => ({
  authId: user.id,
  email: user.email,
  type: type
})