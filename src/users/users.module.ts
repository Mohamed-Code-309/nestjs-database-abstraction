import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepositoryProvider } from './repository/user.repository.provider';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserRepositoryProvider],
})
export class UsersModule {}
