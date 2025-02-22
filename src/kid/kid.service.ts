import {Mongo} from "../db/mongo";
import {randomUUID} from "crypto";
import {Kid} from "./kid";

export class KidService {
  constructor(private mongo: Mongo) {
  }

  save = async (s: Kid) => {
    await this.mongo.kid().deleteMany({})
    await this.mongo.kid().insertOne({id: randomUUID(), ...s})
  }

  get = () => this.mongo.story().find().toArray()
}