import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPersonStudent1610855315354 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
    await queryRunner.createTable(new Table({
        name: 'person_student',
        columns: [
          {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'name',
          type: 'varchar'
        }, 
        {
          name: 'bornDate',
          type: 'date',
        },
        {
            name: 'linkedinUrl',
            type: 'varchar',
            isNullable: true
        },
        {
            name: 'cell',
            type: 'varchar',
            isNullable: true
        },
        {
            name: 'email',
            type: 'varchar'
        },
        {
            name: 'hasExperience',
            type: 'boolean'
        },
        {
            name: 'occupationArea',
            type: 'varchar'
        },
        {
            name: 'mentorExpectations',
            type: 'varchar'
        }
      ] 
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('person_student');
    }

}
