import 'dotenv/config'
import 'reflect-metadata'
import { DataSource, DataSourceOptions } from 'typeorm'

const dataSourceConfig = (): DataSourceOptions => {
    return {
        type: 'postgres',
        url: process.env.DATABASE_URL!,
        synchronize: false,
        logging: true,
        migrations: ['src/migrations/*.ts'],
        entities: ['src/entities/*.ts']
    }
}

const AppDataSource = new DataSource(dataSourceConfig())

export {
    AppDataSource
}