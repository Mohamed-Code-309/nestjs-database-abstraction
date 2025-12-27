import { Injectable } from "@nestjs/common";
import { MongoRepository } from "src/infra/database/repository/mongo.repository";
import { UserMongo } from "../model/user.mongo.model";

@Injectable()
export class UserMongoRepository extends MongoRepository<UserMongo> {

    //new implementation of EXISTING METHOD
    async updateOneById(id: string, data: Partial<UserMongo>): Promise<void> {
        console.log('[Mongo] updateOneById new implementation', { id, data });
        return;
    }

    //NEW METHODS
}
