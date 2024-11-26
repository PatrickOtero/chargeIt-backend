import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1732645609937 implements MigrationInterface {
    name = 'Migrations1732645609937'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "charge" DROP COLUMN "chargeValue"`);
        await queryRunner.query(`ALTER TABLE "charge" ADD "chargeValue" character varying NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "charge" DROP COLUMN "chargeValue"`);
        await queryRunner.query(`ALTER TABLE "charge" ADD "chargeValue" integer NOT NULL`);
    }

}
