const express = require('express');
const routes = express.Router();

routes.get('/personStudent', (request, response) => {
    response.json({ list: [] });
});

routes.post('/personStudent', (req, resp) => {
    
});

export default routes;