import { IBaseRepository } from "./base.repository.interface";

export abstract class BaseRepository<T> implements IBaseRepository<T> {

  async create(data: Partial<T>): Promise<T> {
    throw new Error('create() not implemented');
  }

  async findOne(filter: Partial<T>): Promise<T | null> {
    return null;
  }

  async findOneOrFail(filter: Partial<T>): Promise<T> {
    throw new Error('Entity not found');
  }

  async findOneById(id: string): Promise<T | null> {
    return null;
  }

  async findMany(filter: Partial<T>): Promise<T[]> {
    return [];
  }

  async searchWithPagination(
    filter: Partial<T>,
    page: number,
    limit: number,
  ): Promise<{ data: T[]; total: number }> {
    return { data: [], total: 0 };
  }

  async updateOne(filter: Partial<T>, data: Partial<T>): Promise<void> {
    return;
  }

  async updateOneById(id: string, data: Partial<T>): Promise<void> {
    return;
  }

  async updateMany(filter: Partial<T>, data: Partial<T>): Promise<void> {
    return;
  }

  async deleteOne(filter: Partial<T>): Promise<void> {
    return;
  }

  async deleteOneById(id: string): Promise<void> {
    return;
  }

  async deleteMany(filter: Partial<T>): Promise<void> {
    return;
  }

  async count(filter: Partial<T>): Promise<number> {
    return 0;
  }

  async incrementNumericField(
    filter: Partial<T>,
    field: keyof T,
    value: number,
  ): Promise<void> {
    return;
  }

  async decrementNumericField(
    filter: Partial<T>,
    field: keyof T,
    value: number,
  ): Promise<void> {
    return;
  }
}
