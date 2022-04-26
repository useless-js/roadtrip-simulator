import { Server } from 'socket.io';

(async () => {
  const randomPhrases = [
    'Are we there yet?',
    'I have to go pee!',
    "I'm bored",
    'One, two buckle my shoe...',
    'This is the song that never ends...',
  ];

  const io = new Server(3000);

  io.on('connection', (socket) => {
    socket.emit('connected', 'Successfully connected!');
  });

  let randomInterval = Math.floor(Math.random() * 10000);

  const askQuestion = (interval: number) => {
    setTimeout(() => {
      const randomPhrasesIndex = Math.floor(
        Math.random() * (randomPhrases.length - 1)
      );
      io.emit('phrase', randomPhrases[randomPhrasesIndex]);
      randomInterval = Math.floor(Math.random() * 10000);
      askQuestion(randomInterval);
    }, interval);
  };

  askQuestion(randomInterval);
})();
