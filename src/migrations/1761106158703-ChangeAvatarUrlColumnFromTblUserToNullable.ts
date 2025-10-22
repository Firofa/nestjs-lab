import { MigrationInterface, QueryRunner } from 'typeorm';

export class ChangeAvatarUrlColumnFromTblUserToNullable1761106158703
  implements MigrationInterface
{
  name = 'ChangeAvatarUrlColumnFromTblUserToNullable1761106158703';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "avatarUrl" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" ALTER COLUMN "avatarUrl" SET NOT NULL`,
    );
  }
}
