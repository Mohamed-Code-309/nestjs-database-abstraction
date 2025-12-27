import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseRepositoryProvider } from './database.provider';

@Module({})
export class DatabaseModule {
    static forRoot(): DynamicModule {
        return {
            module: DatabaseModule,
            imports: [
                //Dynamically import based on env
                DatabaseModule.getDatabaseModule(),
            ],
            providers: [DatabaseRepositoryProvider],
            exports: [DatabaseRepositoryProvider],
        };
    }

    private static getDatabaseModule(): DynamicModule {
        const dbType = process.env.DATABASE_TYPE;
        console.log('connected to database:', `[${dbType}]`);
        //[1] MONGO
        if (dbType === 'mongo') {
            return MongooseModule.forRoot(process.env.MONGO_URI!); //Non-null assertion
        }
        //[2] POSTGRES
        if (dbType === 'postgres') {
            return TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRES_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB,
                // autoLoadEntities: true,
                synchronize: false
            });
        }
        throw new Error(`Unsupported DATABASE_TYPE: ${dbType}`);
    }
}
