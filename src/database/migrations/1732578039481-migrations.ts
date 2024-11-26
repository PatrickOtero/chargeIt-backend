import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1732578039481 implements MigrationInterface {
    name = 'Migrations1732578039481'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "charge" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "customer_id" uuid NOT NULL, "description" character varying NOT NULL, "chargeStatus" character varying NOT NULL, "chargeValue" character varying NOT NULL, "chargeDueDate" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ac0381acde3bdffe41ad57cd942" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customer" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "customerName" character varying NOT NULL, "customerEmail" character varying NOT NULL, "customerCpf" character varying NOT NULL, "customerPhone" character varying NOT NULL, "customerCep" character varying NOT NULL, "location" character varying NOT NULL, "complement" character varying NOT NULL, "district" character varying NOT NULL, "city" character varying NOT NULL, "estate" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "charge" ADD CONSTRAINT "FK_7a8fbe55c1dfdef51ce2591ddb3" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "charge" DROP CONSTRAINT "FK_7a8fbe55c1dfdef51ce2591ddb3"`);
        await queryRunner.query(`DROP TABLE "customer"`);
        await queryRunner.query(`DROP TABLE "charge"`);
    }

}
