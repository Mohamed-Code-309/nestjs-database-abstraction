import { Injectable } from '@nestjs/common';
import { IBaseRepository } from './base.repository.interface';

@Injectable()
export class MongoRepository<T> implements IBaseRepository<T> {
     async create(data: Partial<T>): Promise<T> {
    console.log('[Mongo] create', data);
    return data as T;
  }

  async findOne(filter: Partial<T>) {
    console.log('[Mongo] findOne', filter);
    return null;
  }

  async findOneOrFail(filter: Partial<T>): Promise<T> {
    console.log('[Mongo] findOneOrFail', filter);
    throw new Error('Not found');
  }

  async findOneById(id: string) {
    console.log('[Mongo] findOneById', id);
    return null;
  }

  async findMany(filter: Partial<T>) {
    console.log('[Mongo] findMany', filter);
    return [];
  }

  async searchWithPagination(filter: Partial<T>, page: number, limit: number) {
    console.log('[Mongo] searchWithPagination', { filter, page, limit });
    return { data: [], total: 0 };
  }

  async updateOne(filter: Partial<T>, data: Partial<T>) {
    console.log('[Mongo] updateOne', { filter, data });
  }

  async updateOneById(id: string, data: Partial<T>) {
    console.log('[Mongo] updateOneById', { id, data });
  }

  async updateMany(filter: Partial<T>, data: Partial<T>) {
    console.log('[Mongo] updateMany', { filter, data });
  }

  async deleteOne(filter: Partial<T>) {
    console.log('[Mongo] deleteOne', filter);
  }

  async deleteOneById(id: string) {
    console.log('[Mongo] deleteOneById', id);
  }

  async deleteMany(filter: Partial<T>) {
    console.log('[Mongo] deleteMany', filter);
  }

  async count(filter: Partial<T>) {
    console.log('[Mongo] count', filter);
    return 0;
  }

  async incrementNumericField(filter: Partial<T>, field: keyof T, value: number) {
    console.log('[Mongo] increment', { filter, field, value });
  }

  async decrementNumericField(filter: Partial<T>, field: keyof T, value: number) {
    console.log('[Mongo] decrement', { filter, field, value });
  }
}
