const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

// local server connecction
mongoose.connect('mongodb://localhost:27017/omnistack10', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// cloud server connection
// mongoose.connect('mongodb+srv://omnistack:f@el162536@cluster0-inhfk.mongodb.net/week10?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.use(cors());
app.use(express.json());

// Métodos HTTP: GET, POST, PUT, DELETE
app.use(routes);
// Tipos de parâmetros:
// Query params: request.query (filtros, ordenação, paginação, ...)
// Route params: request.params (identifica um recurso na alteração ou remoção)
// Body: request.body (dados para criação ou alteração de um registro)


server.listen(3333);