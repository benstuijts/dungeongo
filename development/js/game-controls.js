'use strict';
window.onload = function() {
  const messageBar = document.getElementById('message-bar');
  const player = {
    name: 'player #' + Math.floor(Math.random()*9),
    id: 'id' + Math.floor(Math.random()*9),
    avatar: Math.floor(Math.random()*9),
    hp: Math.floor(Math.random()*9),
    mp: Math.floor(Math.random()*9),
    exp: Math.floor(Math.random()*9),
    level: Math.floor(Math.random()*9 + 1),
  }

  const players = [];
  players.push(player);

  console.log(players);

  players.forEach(function(player){
    console.log(player);
  });

  updateActivePlayersContainer(players)


  socket.emit('new user', {
    player,
    dungeon: {
      "id": "randomdungeon",
      "name": "Random Dungeon",
    },
    "room" : "general"
  });

  document.getElementById("enter").addEventListener("click", (e) => {
    e.preventDefault();
    socket.emit('enter dungeon', {
      player,
      dungeon: {
        "id": "randomdungeon",
        "name": "Random Dungeon",
      },
      "room" : "abc123"
    });
  }, false);

  document.getElementById("enter2").addEventListener("click", (e) => {
    e.preventDefault();
    socket.emit('ENTER_DUNGEON', {
      player,
      dungeon: {
        "id": "randomdungeon",
        "name": "Random Dungeon",
      },
      "room" : "randomdungeon"
    });
  }, false);



  socket.on('user joined', function(data){
    console.log(data);
    messageBar.innerHTML = data.player.name + ' joined...';
  });

  socket.on('user left', function(data){
    console.log(data);
    messageBar.innerHTML = data.player.name + ' left...';
  });

}

function updateActivePlayersContainer(players) {
  let parent = document.getElementById("active-players-container");
      parent.innerHTML = "";
  players.forEach((player) => {
    let el = document.createElement('div');
        el.className = "player-container";
        el.innerHTML = playerContainer(player);
    parent.appendChild(el);
  });
}

const playerContainer = function(player) {
  return `<div class="player-avatar-container"><img src="./images/avatar/${player.avatar}.png" width="100"></div>
  <div class="player-name-container">
    <p class="player-name">
      <span id="player-name">${player.name}</span>
    </p>
    <div class="player-level-container">
      <span id="player-level">${player.level}</span>
    </div>
  </div>
  <div class="player-stats-container">
    <progress class="progress-hp" max="10" value="${player.hp}"></progress>
    <progress class="progress-mp" max="10" value="${player.mp}"></progress>
    <progress class="progress-exp" max="10" value="${player.exp}"></progress>
  </div>
  `;
}
