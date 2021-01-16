import { Request, Response, Router } from 'express';

const routes = Router();
routes.get('/', (req:Request, res:Response) => { 
    res.json({'title': 'Hello world!'}) 
});

export default routes;