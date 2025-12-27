import { Injectable } from '@nestjs/common';
import { IBaseRepository } from './base.repository.interface';

@Injectable()
export class PostgresRepository<T> implements IBaseRepository<T> {
    async create(data: Partial<T>): Promise<T> {
        console.log('[Postgres] create', data);
        return data as T;
    }

    async findOne(filter: Partial<T>) {
        console.log('[Postgres] findOne', filter);
        return null;
    }

    async findOneOrFail(filter: Partial<T>): Promise<T> {
        console.log('[Postgres] findOneOrFail', filter);
        throw new Error('Not found');
    }

    async findOneById(id: string) {
        console.log('[Postgres] findOneById', id);
        return null;
    }

    async findMany(filter: Partial<T>) {
        console.log('[Postgres] findMany', filter);
        return [];
    }

    async searchWithPagination(filter: Partial<T>, page: number, limit: number) {
        console.log('[Postgres] searchWithPagination', { filter, page, limit });
        return { data: [], total: 0 };
    }

    async updateOne(filter: Partial<T>, data: Partial<T>) {
        console.log('[Postgres] updateOne', { filter, data });
    }

    async updateOneById(id: string, data: Partial<T>) {
        console.log('[Postgres] updateOneById', { id, data });
    }

    async updateMany(filter: Partial<T>, data: Partial<T>) {
        console.log('[Postgres] updateMany', { filter, data });
    }

    async deleteOne(filter: Partial<T>) {
        console.log('[Postgres] deleteOne', filter);
    }

    async deleteOneById(id: string) {
        console.log('[Postgres] deleteOneById', id);
    }

    async deleteMany(filter: Partial<T>) {
        console.log('[Postgres] deleteMany', filter);
    }

    async count(filter: Partial<T>) {
        console.log('[Postgres] count', filter);
        return 0;
    }

    async incrementNumericField(filter: Partial<T>, field: keyof T, value: number) {
        console.log('[Postgres] increment', { filter, field, value });
    }

    async decrementNumericField(filter: Partial<T>, field: keyof T, value: number) {
        console.log('[Postgres] decrement', { filter, field, value });
    }
}
