const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class Refactor1681307457444 {
    name = 'Refactor1681307457444'

    async up(queryRunner) {
        await queryRunner.query(`DROP INDEX \`IDX_77d7cc9d95dccd574d71ba221b\` ON \`card\``);
    }

    async down(queryRunner) {
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_77d7cc9d95dccd574d71ba221b\` ON \`card\` (\`userId\`)`);
    }
}
