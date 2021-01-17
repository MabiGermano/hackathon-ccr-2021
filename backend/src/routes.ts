import { Router } from 'express';

const routes = Router();

routes.get('/personStudent', (request, response) => {
    response.json({ list: [] });
});

routes.post('/personStudent', (req, resp) => {
    
});

export default routes;