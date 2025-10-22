import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import * as path from 'path';

export default (): PostgresConnectionOptions => {
  const isProduction = process.env.NODE_ENV === 'production';

  return {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT ?? '5432') || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'hamster212',
    database: process.env.DB_NAME || 'db_uji_coba',
    entities: [path.join(__dirname, '..', '**', '*.entity.js')],
    migrations: [path.join(__dirname, '..', 'migrations', '*.js')],
    synchronize: false, // Matikan synchronize
    migrationsRun: false, // Set true jika mau auto-run saat app start
    logging: !isProduction,
  };
};
