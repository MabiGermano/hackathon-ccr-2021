import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import PersonStudent from './models/PersonStudent';

const routes = Router();

routes.get('/personStudent', (request: Request, response: Response) => {
    response.json({ list: [] });
});

routes.post('/personStudent', (request: Request, response: Response) => {
    const {
        name,
        bornDate,
        genderIdentity,
        email,
        hasExperience,
        occupationArea,
        experienceDescription,
        mentorExpectations,
    } = request.body;

    const personStudentRepository = getRepository(PersonStudent);

    const data = {
        name,
        bornDate,
        genderIdentity,
        email,
        hasExperience,
        occupationArea,
        experienceDescription,
        mentorExpectations,
    };

    const personStudent = personStudentRepository.create(data);

    personStudentRepository.save(personStudent);
    return response.status(201).json(personStudent);

});

export default routes;