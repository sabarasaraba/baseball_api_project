import {MigrationInterface, QueryRunner} from "typeorm";

export class PlayerMigration1605253473352 implements MigrationInterface {
    name = 'PlayerMigration1605253473352'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "players" ("playerID" uuid NOT NULL DEFAULT uuid_generate_v4(), "birthYear" integer DEFAULT null, "birthMonth" integer DEFAULT null, "birthDay" integer DEFAULT null, "birthCountry" character varying DEFAULT null, "birthState" character varying DEFAULT null, "birthCity" character varying DEFAULT null, "deathYear" integer DEFAULT null, "deathMonth" integer DEFAULT null, "deathDay" integer DEFAULT null, "deathCountry" character varying DEFAULT null, "deathState" character varying DEFAULT null, "deathCity" character varying DEFAULT null, "nameFirst" character varying DEFAULT null, "nameLast" character varying DEFAULT null, "nameGiven" character varying DEFAULT null, "weight" integer DEFAULT null, "height" integer DEFAULT null, "bats" character varying DEFAULT null, "throws" character varying DEFAULT null, "debut" TIMESTAMP DEFAULT null, "finalGame" TIMESTAMP DEFAULT null, "retroID" character varying DEFAULT null, "bbrefID" character varying DEFAULT null, CONSTRAINT "PK_a5a1b5f0f5ddd7c343d0a96c791" PRIMARY KEY ("playerID"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "players"`);
    }

}
