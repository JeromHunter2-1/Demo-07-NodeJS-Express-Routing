const express = require('express');
const app = express.Router();

// Orders
app.get('/', (request, response) => {
    response.status(200).json({ message: 'GET all orders' });
});

app.post('/', (request, response) => {
    response.status(200).json({ message: `CREATE new order` });
});

app.get('/:id', (request, response) => {
    response.status(200).json({ message: `GET order with id ${request.params.id}` });
});

app.put('/:id', (request, response) => {
    response.status(200).json({ message: `UPDATE order with id ${request.params.id}` });
});

app.delete('/:id', (request, response) => {
    response.status(200).json({ message: `DELETE order with id ${request.params.id}` });
});

module.exports=app;