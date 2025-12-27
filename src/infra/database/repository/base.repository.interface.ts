export interface IBaseRepository<T> {
  create(data: Partial<T>): Promise<T>;

  findOne(filter: Partial<T>): Promise<T | null>;
  findOneOrFail(filter: Partial<T>): Promise<T>;
  findOneById(id: string): Promise<T | null>;
  findMany(filter: Partial<T>): Promise<T[]>;
  
  searchWithPagination(
    filter: Partial<T>,
    page: number,
    limit: number,
  ): Promise<{ data: T[]; total: number }>;

  updateOne(filter: Partial<T>, data: Partial<T>): Promise<void>;
  updateOneById(id: string, data: Partial<T>): Promise<void>;
  updateMany(filter: Partial<T>, data: Partial<T>): Promise<void>;

  deleteOne(filter: Partial<T>): Promise<void>;
  deleteOneById(id: string): Promise<void>;
  deleteMany(filter: Partial<T>): Promise<void>;

  count(filter: Partial<T>): Promise<number>;
  incrementNumericField(
    filter: Partial<T>,
    field: keyof T,
    value: number,
  ): Promise<void>;
  decrementNumericField(
    filter: Partial<T>,
    field: keyof T,
    value: number,
  ): Promise<void>;
}
