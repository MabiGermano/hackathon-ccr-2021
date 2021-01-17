import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import PersonStudent from './models/PersonStudent';

const routes = Router();

routes.get('/personStudent', async (request: Request, response: Response) => {
    const personStudentRepository = getRepository(PersonStudent);
    const personStudent = await personStudentRepository.find();

    return response.json(personStudent);
});

routes.post('/personStudent', async (request: Request, response: Response) => {
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

    await personStudentRepository.save(personStudent);
    return response.status(201).json(personStudent);

});

export default routes;