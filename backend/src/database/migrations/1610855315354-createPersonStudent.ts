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
            name: 'genderIdentity',
            type: 'varchar'
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
            name: 'experienceDescription',
            type: 'text'
        },
        {
            name: 'mentorExpectations',
            type: 'varchar'
        },
        {
          name: 'about',
          type: 'text'
        }
      ] 
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('person_student');
    }

}