import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8003');

socket.emit('join', {username: 'he11', gameId: '111', instanceId: '222'});
 
function subscribeToTimer(cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subscribeToTimer', 1000);
}

function subscribeToGame(cb) {
  socket.on('game_created', gameData => { 
  console.log(gameData)

  cb(null, gameData)
  });
}
export { subscribeToTimer, subscribeToGame };