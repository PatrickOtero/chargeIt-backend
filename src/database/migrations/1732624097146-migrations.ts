import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1732624097146 implements MigrationInterface {
    name = 'Migrations1732624097146'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "customerCep" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "location" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "complement" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "district" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "city" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "estate" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "estate" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "city" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "district" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "complement" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "location" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "customerCep" SET NOT NULL`);
    }

}
