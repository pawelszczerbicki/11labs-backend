import {Mongo} from "../db/mongo";
import {Story} from "./story";
import {randomUUID} from "crypto";

export class StoryService {
  constructor(private mongo: Mongo) {
  }

  save = (s: Story) => this.mongo.story().insertOne({id: randomUUID(), ...s})
  getAll = () => this.mongo.story().find().toArray()
  get = (id: string) => this.mongo.story().findOne({id})
  delete = (id: string) => this.mongo.story().deleteOne({id})
}