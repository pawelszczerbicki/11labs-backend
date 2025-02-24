import {Db, MongoClient} from "mongodb";
import {Kid} from "../kid/kid";
import { Story } from "src/story/story";

const users = "users";
const story = "story";
const kid = "kid";

export class Mongo {
  public mongo: Db;
  public client: MongoClient;

  public static close = () => this.close();

  public connect = (url: string): Promise<any> =>
    MongoClient.connect(url)
      .then((c) => (this.client = c))
      .then((c) => (this.mongo = c.db()))

  public users = () => this.mongoCollection<{ test: string }>(users);
  public story = () => this.mongoCollection<Story>(story);
  public kid = () => this.mongoCollection<Kid>(kid);
  public mongoCollection = <T>(name: string) => this.mongo.collection<T>(name);
}

export const noUndefined = <T>(o: T): any => Object.fromEntries<T>(Object.entries(o).filter(([_, value]) => value !== undefined));
