const express = require('express');
const app = express.Router();

// Customers
app.get('/', (request, response) => {
    response.status(200).json({ message: 'GET all customers' });
});

app.post('/', (request, response) => {
    response.status(200).json({ message: `CREATE new customer` });
});

app.get('/:id', (request, response) => {
    response.status(200).json({ message: `GET customer with id ${request.params.id}` });
});

app.put('/:id', (request, response) => {
    response.status(200).json({ message: `UPDATE customer with id ${request.params.id}` });
});

app.delete('/:id', (request, response) => {
    response.status(200).json({ message: `DELETE customer with id ${request.params.id}` });
});

module.exports=app;