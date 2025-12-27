import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { USER_REPOSITORY } from './repository/user.repository.provider';
import type { IBaseRepository } from 'src/infra/database/repository/base.repository.interface'; //type
import { UserType } from './dto/user.type';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepo: IBaseRepository<UserType>,
  ) { }

  create(createUserDto: CreateUserDto) {
    this.userRepo.create({});
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    this.userRepo.updateOneById(id, updateUserDto);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
