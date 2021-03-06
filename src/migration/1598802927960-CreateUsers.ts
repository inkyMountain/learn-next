import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateUsers1598802927960 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            isGenerated: true,
            type: 'int',
            name: 'id',
          },
          {
            type: 'varchar',
            name: 'username',
          },
          {
            type: 'varchar',
            name: 'password_digest',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
