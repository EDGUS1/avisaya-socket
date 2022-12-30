let elementos = [1, 2, 3];

export default io => {
  io.on('connection', socket => {
    const address = socket.handshake;

    console.log('Nueva conexión', socket.id);
    console.log('Ip: ', address.headers['x-forwarded-for']);

    socket.emit('connected', 'a');
    socket.emit('render', { elementos });

    socket.on('client:select', data => {
      io.emit('render', { elementos });
    });

    socket.on('evento', data => {
      console.log(data);
      io.emit('render', data);
    });
  });
};
