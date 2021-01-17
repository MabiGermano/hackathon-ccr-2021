import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

@Entity('person_student')
export default class PersonStudent {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    bornDate: Date;

    @Column()
    cell: String;

    @Column()
    linkedinUrl: String;

    @Column()
    email: String;

    @Column()
    hasExperience: Boolean;

    @Column()
    occupationArea: String;
    
    @Column()
    mentorExpectations: String;

}