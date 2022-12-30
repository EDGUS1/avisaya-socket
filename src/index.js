import express from 'express';
import { Server as WebSocketServer } from 'socket.io';
import http from 'http';
import cors from 'cors';

import Sockets from './socket.js';

const app = express();
app.use(cors());
const options = {
  cors: {
    origin: '*',
  },
};
// let corsOptions = {
//   origin: 'http://localhost:4200',
// };
// app.use(cors(corsOptions));
// const httpServer = http.createServer(app);
// const io = new WebSocketServer(httpServer);
const httpServer = http.Server(app);
const io = new WebSocketServer(httpServer, options);
app.get('/', function (req, res) {
  res.send('Hello World!');
});
Sockets(io);
// io.on('connection', function (socket) {
//   const handshake = socket.id;

//   let { nameRoom } = socket.handshake.query;
//   console.log(` conentado a la ${nameRoom}`);
//   socket.join(nameRoom);

//   socket.on('evento', res => {
//     // Emite el mensaje a todos lo miembros de las sala menos a la persona que envia el mensaje
//     socket.to(nameRoom).emit('evento', res);
//   });

//   socket.on('disconnect', function () {
//     console.log('user disconnected');
//   });
// });

httpServer.listen(process.env.PORT || 3000);
console.log('Server on port 3000');
