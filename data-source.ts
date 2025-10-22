// data-source.ts
import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config(); // Load .env file

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT ?? '5432') || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'hamster212',
  database: process.env.DB_NAME || 'db_uji_coba',
  entities: ['src/**/*.entity.ts'], // Path ke entity .ts
  migrations: ['src/migrations/*.ts'], // Path ke migration files
  synchronize: false, // WAJIB false saat pakai migration
});
