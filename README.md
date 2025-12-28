# nestjs-database-abstraction
- a NestJS project that can switch between 2 different databases (e.g., Postgres and MongoDB) through abstraction layer without affecting the business logic of the application.
- only change `DATABASE_TYPE` in `.env` file
```
Service
  ↓
IBaseRepository<User>
  ↓
MongoUserRepository | PostgresUserRepository
```
