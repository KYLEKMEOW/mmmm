function formatNumber(number) {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + 'm';
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + 'k';
  } else {
    return number;
  }
}


function updateRankings(players) {
  players.sort((a, b) => b.runes - a.runes);

  const container = document.getElementById('playersContainer');
  container.innerHTML = '';

  players.forEach((player, index) => {
    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player');

    if (index === 0) {
      playerDiv.classList.add('gradient-gold');
    } else if (index === 1) {
      playerDiv.classList.add('gradient-silver');
    } else if (index === 2) {
      playerDiv.classList.add('gradient-bronze');
    }

    playerDiv.textContent = `${player.name}: ${formatNumber(player.runes)} рун`;
    container.appendChild(playerDiv);
  });

  // Сохранение данных в localStorage
  localStorage.setItem('players', JSON.stringify(players));
}

function simulateRuneIncrement(players) {
  setInterval(() => {
    players.forEach(player => {
      player.runes += Math.floor(Math.random() * (12941 - 1102 + 1)) + 928;
    });

    updateRankings(players);
  }, 9000);
}

// Загрузка данных из localStorage при загрузке страницы
const savedPlayers = localStorage.getItem('players');
const players = savedPlayers ? JSON.parse(savedPlayers) : [
  { name: '🛡️🫂👗🪙👑🧑‍💻💘❄️KYLEK_MEOW', runes: 0 },
  { name: '👗🪙👑🧑‍💻💘❄️GoGoMeMe', runes: 0 },
  { name: '🛡️🫂👗🪙👑🧑‍💻💘❄️Hola COLA', runes: 0 },
  { name: '👗🪙👑🧑‍💻💘❄️Joline', runes: 0 },
  { name: '👗🪙👑🧑‍💻💘❄️Pell', runes: 0 },
  { name: '🛡️GameOON', runes: 0 },
  { name: '☃️👗🪙✒️ⓂAmnistaria', runes: 0 },
  // Add more players as needed
];

simulateRuneIncrement(players);