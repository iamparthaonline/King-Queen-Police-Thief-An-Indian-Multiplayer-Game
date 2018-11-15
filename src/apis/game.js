import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8003');
const SOCKET_LIST = {
  "JOIN_GAME": "JOIN_GAME",
  "GAME_UPDATE": "GAME_UPDATE",
  "GAME_MOVE": "GAME_MOVE"
}
// const userProfile = JSON.parse(localStorage.getItem('userProfile'));

function joinGame( gameId, instanceId, username, callback ) {
 
  socket.emit( SOCKET_LIST.JOIN_GAME, { username, gameId, instanceId }, () => {
    callback && callback();
  });
}

function subscribeToGame(callback) {
  socket.on( SOCKET_LIST.GAME_UPDATE, gameData => { 

    callback && callback(null, gameData);

  });
}
function moveGame( data, callback ) {

  socket.emit( SOCKET_LIST.GAME_MOVE, { ...data }, () => {
    callback && callback();
  });
}
export { joinGame, moveGame, subscribeToGame };