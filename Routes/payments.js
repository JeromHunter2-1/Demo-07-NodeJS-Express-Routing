const express = require('express');
const app = express.Router();


// Payments
app.get('/', (request, response) => {
    response.status(200).json({ message: 'GET all payments' });
});

app.post('/', (request, response) => {
    response.status(200).json({ message: `CREATE new payments` });
});

app.get('/:id', (request, response) => {
    response.status(200).json({ message: `GET payments with id ${request.params.id}` });
});

app.put('/:id', (request, response) => {
    response.status(200).json({ message: `UPDATE payments with id ${request.params.id}` });
});

app.delete('/:id', (request, response) => {
    response.status(200).json({ message: `DELETE payments with id ${request.params.id}` });
});

module.exports=app;