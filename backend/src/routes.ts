import { Router, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import PersonStudent from './models/PersonStudent';
import nodemailer from 'nodemailer';
import {config} from 'dotenv';

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
        email,
        hasExperience,
        occupationArea,
        cell,
        linkedinUrl,
        mentorExpectations,
    } = request.body;

    const personStudentRepository = getRepository(PersonStudent);

    const data = {
        name,
        bornDate,
        email,
        hasExperience,
        occupationArea,
        cell,
        linkedinUrl,
        mentorExpectations,
    };

    const personStudent = personStudentRepository.create(data);

    await personStudentRepository.save(personStudent);
    return response.status(201).json(personStudent);

});

routes.post('/conectar/:id', async (request: Request, response: Response) => {
    const { id } = request.params;
    const personStudentRepository = getRepository(PersonStudent);
    const person = await personStudentRepository.findOneOrFail(id);


    var sender = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'gmail',
        secure: true,
        auth: {
            user: process.env.EMAIL_TO_SEND,
            pass: process.env.PASSWORD_EMAIL
        }
    });

    var emailToSend = {
        from: 'mabi.germano.e@gmail.com',
        to: person.email.toString(),
        subject: '[MinasTalk] EBA! Um Mentor(a) Tem Interesse!!',
        text: `Oi ${person.name}, um mentor(a) sinalizou interesse no seu perfil, e quer entrar em contato com você para começar imediatamente os estudos, não é legal?! 
        Por favor, responda esse email com "Tenho interesse" e nossa equipe cuidará do primeiro contato entre vocês.
        Caso o email não seja respondido em até 24h, entenderemos que você não tem interesse.
        Abraços, equipe MinasTalk`,
    };


    sender.sendMail(emailToSend, function (error) {
        if (error) {
            return response.status(400).json({status: "error"});
        } else {
            return response.status(200).json({status: "success"});
        }
    });


})

export default routes;