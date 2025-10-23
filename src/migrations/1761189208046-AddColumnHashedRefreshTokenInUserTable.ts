import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddColumnHashedRefreshTokenInUserTable1761189208046
  implements MigrationInterface
{
  name = 'AddColumnHashedRefreshTokenInUserTable1761189208046';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ADD "hashedRefreshToken" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP COLUMN "hashedRefreshToken"`,
    );
  }
}
