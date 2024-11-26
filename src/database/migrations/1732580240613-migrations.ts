import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1732580240613 implements MigrationInterface {
    name = 'Migrations1732580240613'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "charge" ADD "customerCpf" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "cpf" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "phone" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "charge" DROP CONSTRAINT "FK_7a8fbe55c1dfdef51ce2591ddb3"`);
        await queryRunner.query(`ALTER TABLE "charge" ALTER COLUMN "customer_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "charge" DROP COLUMN "chargeValue"`);
        await queryRunner.query(`ALTER TABLE "charge" ADD "chargeValue" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "charge" DROP COLUMN "chargeDueDate"`);
        await queryRunner.query(`ALTER TABLE "charge" ADD "chargeDueDate" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "charge" ADD CONSTRAINT "FK_7a8fbe55c1dfdef51ce2591ddb3" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "charge" DROP CONSTRAINT "FK_7a8fbe55c1dfdef51ce2591ddb3"`);
        await queryRunner.query(`ALTER TABLE "charge" DROP COLUMN "chargeDueDate"`);
        await queryRunner.query(`ALTER TABLE "charge" ADD "chargeDueDate" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "charge" DROP COLUMN "chargeValue"`);
        await queryRunner.query(`ALTER TABLE "charge" ADD "chargeValue" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "charge" ALTER COLUMN "customer_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "charge" ADD CONSTRAINT "FK_7a8fbe55c1dfdef51ce2591ddb3" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "phone" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "cpf" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "charge" DROP COLUMN "customerCpf"`);
    }

}
