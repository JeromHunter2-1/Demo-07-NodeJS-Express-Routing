const express = require('express');


const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

app.get('/', (request, response) => {
    response.send('/Jerom Castro' );
});

// Customers  
const customerRouter = require('./Routes/customer');  
app.use('/customers', customerRouter);  

// Orders  
const orderRouter = require('./Routes/order');  
app.use('/orders', orderRouter);  

// Payments  
const paymentRouter = require('./Routes/payments');
app.use('/payments', paymentRouter);