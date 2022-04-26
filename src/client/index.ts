import { io } from 'socket.io-client';

(async () => {
  const socket = io('ws://localhost:3000');

  socket.on('connected', (arg) => {
    console.log(arg);
  });

  socket.on('phrase', (arg) => {
    console.log(arg);
  });
})();
