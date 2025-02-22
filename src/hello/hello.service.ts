export class HelloService {
  sayHello = (): Promise<{ hello: string }> => Promise.resolve({hello: "hello world"});
}