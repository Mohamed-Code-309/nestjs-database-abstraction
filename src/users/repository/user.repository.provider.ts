import { UserMongoRepository } from './user.mongo.repository';
import { UserPostgresRepository } from './user.postgres.repository';
import { ConfigService } from '@nestjs/config';

export const USER_REPOSITORY = 'USER_REPOSITORY';

export const UserRepositoryProvider = {
  provide: USER_REPOSITORY,
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    const dbType = configService.get<string>('DATABASE_TYPE');
    return dbType === 'mongo'
      ? new UserMongoRepository()
      : new UserPostgresRepository();
  },
};