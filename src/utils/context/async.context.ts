import {AsyncLocalStorage} from "async_hooks";

export class AsyncContext {
  private static asyncLocalStorage: AsyncLocalStorage<ContextProperties>;

  public static initialize(): void {
    if (AsyncContext.asyncLocalStorage) return;

    const storage = new AsyncLocalStorage<ContextProperties>();
    storage.enterWith({});

    AsyncContext.asyncLocalStorage = storage;
  }

  public static getStorage(): AsyncLocalStorage<ContextProperties> {
    if (!AsyncContext.asyncLocalStorage) AsyncContext.initialize();

    return AsyncContext.asyncLocalStorage;
  }
}

export interface ContextProperties {
  companyId?: string
  email?: string
}

export const getCompanyId = () => AsyncContext.getStorage().getStore().companyId
export const getEmail = () => AsyncContext.getStorage().getStore().email