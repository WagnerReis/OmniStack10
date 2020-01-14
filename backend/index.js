const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-fgjfz.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros:

// Query Params: request.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso da alteração ou remoção)
// Body: request.body (Dados param criação alteração de um registro)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello World'});
});

app.listen(3333);