const express = require('express');
const mongoose = require('mongoose');
const routes = require('./router');

const app = express();

mongoose.connect('mongodb+srv://mrfelipelima:3586tau78@cluster0-nvash.mongodb.net/semana9?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// req.query = Acessar querry params (para filtros)
// req.params = Acessar route params (para edição e delete)
// req.body = Acessar corpo da requisição (para criação e edição de registros)

app.use(express.json());
app.use(routes);

app.listen(3333);