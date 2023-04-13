const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class Refactor1681306611981 {
    name = 'Refactor1681306611981'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`card\` ADD \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`card\` ADD UNIQUE INDEX \`IDX_77d7cc9d95dccd574d71ba221b\` (\`userId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_77d7cc9d95dccd574d71ba221b\` ON \`card\` (\`userId\`)`);
        await queryRunner.query(`ALTER TABLE \`card\` ADD CONSTRAINT \`FK_77d7cc9d95dccd574d71ba221b0\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`card\` DROP FOREIGN KEY \`FK_77d7cc9d95dccd574d71ba221b0\``);
        await queryRunner.query(`DROP INDEX \`REL_77d7cc9d95dccd574d71ba221b\` ON \`card\``);
        await queryRunner.query(`ALTER TABLE \`card\` DROP INDEX \`IDX_77d7cc9d95dccd574d71ba221b\``);
        await queryRunner.query(`ALTER TABLE \`card\` DROP COLUMN \`userId\``);
    }
}
