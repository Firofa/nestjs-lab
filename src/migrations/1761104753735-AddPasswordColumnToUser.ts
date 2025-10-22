import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPasswordColumnToUser1761104753735
  implements MigrationInterface
{
  name = 'AddPasswordColumnToUser1761104753735';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // 1. Tambah kolom dengan default temporary
    await queryRunner.query(
      `ALTER TABLE "user" ADD "password" character varying NOT NULL DEFAULT 'temp_password'`,
    );

    // 2. Hapus default value setelah kolom dibuat
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "password" DROP DEFAULT`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
  }
}
