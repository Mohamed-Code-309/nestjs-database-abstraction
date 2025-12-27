// database/database.providers.ts
import { MongoRepository } from './repository/mongo.repository';
import { PostgresRepository } from './repository/postgres.repository';

export const REPOSITORY_TOKEN = 'BASE_REPOSITORY';

export const DatabaseRepositoryProvider = {
  provide: REPOSITORY_TOKEN,
  useClass:
    process.env.DATABASE_TYPE === 'mongo'
      ? MongoRepository
      : PostgresRepository,
};
