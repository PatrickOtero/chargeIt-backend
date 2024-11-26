import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1732645725462 implements MigrationInterface {
    name = 'Migrations1732645725462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "charge" DROP COLUMN "chargeValue"`);
        await queryRunner.query(`ALTER TABLE "charge" ADD "chargeValue" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "charge" DROP COLUMN "chargeValue"`);
        await queryRunner.query(`ALTER TABLE "charge" ADD "chargeValue" integer NOT NULL`);
    }

}
