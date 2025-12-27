import { Injectable } from "@nestjs/common";
import { PostgresRepository } from "src/infra/database/repository/postgres.repository";
import { UserPostgres } from "../model/user.postgres.model";

@Injectable()
export class UserPostgresRepository extends PostgresRepository<UserPostgres> { }
