// Пример данных активности игроков
const players = [
  { name: '🛡️💗☃️🫂👗🪙👑🧑‍💻💘❄️KYLEK_MEOW', activity: 17855 },
  { name: '💗☃️👗🪙👑🧑‍💻💘❄️GoGoMeMe', activity: 9686 },
  { name: '🛡️💗☃️🫂👗🪙👑🧑‍💻💘❄️Hola COLA', activity: 6646 },
  { name: '💗☃️👗🪙👑🧑‍💻💘❄️Joline', activity: 1235 },
  { name: '💗☃️👗🪙👑🧑‍💻💘❄️Pell', activity: 8558 },
  { name: '❓🛡️💗☃️GameOON!', activity: 3441 },
  { name: '🦉💗☃️👗🪙✒️ⓂAmnistaria', activity: 5948 },
  { name: '🦉ⓂShaSha', activity: 12684 },
  { name: '️Kisylya', activity: 11825 },
  { name: '️MYrMeOW', activity: 9754 },
];

// Определение наград и целей для каждого сундука
const chestsData = [
  { reward: 'Награда: 🪙150 золота ⚡100 вкладов вашему клубу', goal: 10000000 },
  { reward: 'Награда: 🪙180 золота ⚡190 вкладов вашему клубу 🏳️Ивент "Х2 активность" на сутки', goal: 50000000 },
  { reward: 'Награда: 🏳️Ивент "Х2 активность" на неделю 🏳️Ивент "Х2 золото" на неделю 🪙500 золота ⚡211 вкладов вашему клубу', goal: 350000000 }

];

// Отображаем рейтинг игроков
function displayPlayersRanking() {
  const topPlayersList = document.querySelector('.top-players-list');
  topPlayersList.innerHTML = ''; // Очищаем текущий список

  // Сортируем игроков по активности
  players.sort((a, b) => b.activity - a.activity);

  // Выводим отсортированный рейтинг игроков
  players.forEach(player => {
    const playerItem = document.createElement('li');
    playerItem.textContent = `${player.name}: ${player.activity.toLocaleString()} активности`;
    topPlayersList.appendChild(playerItem);
  });
}

// Отображаем лучшего игрока в золотой рамке
function displayBestPlayer() {
  const bestPlayer = players[0];
  const bestPlayerElement = document.getElementById('best-player');
  bestPlayerElement.textContent = `Лучший игрок: ${bestPlayer.name} (${bestPlayer.activity.toLocaleString()} активности)`;
}

// Обновляем прогрессбары для каждого сундука
function updateChestsProgress() {
  const chests = document.querySelectorAll('.chest');

  chests.forEach((chest, index) => {
    const progressElement = chest.querySelector('.progress');
    const goal = chestsData[index].goal;
    const currentProgress = Math.min(players.reduce((acc, player) => acc + player.activity, 0), goal);
    const completionPercentage = (currentProgress / goal) * 100;
    progressElement.style.width = `${completionPercentage}%`;

    // Проверяем, достигнут ли порог активности для получения награды
    if (currentProgress >= goal) {
      const rewardElement = chest.querySelector('.reward');
      rewardElement.textContent = chestsData[index].reward; // Устанавливаем награду
    }

    // Добавляем всплывающую подсказку при наведении на картинку сундука
    const chestImage = chest.querySelector('img');
    chestImage.addEventListener('mouseover', () => {
      const rewardTooltip = document.createElement('div');
      rewardTooltip.classList.add('tooltip');
      rewardTooltip.textContent = chestsData[index].reward;
      chest.appendChild(rewardTooltip);
    });

    chestImage.addEventListener('mouseout', () => {
      const rewardTooltip = chest.querySelector('.tooltip');
      if (rewardTooltip) {
        rewardTooltip.remove();
      }
    });
  });
}

// Обновляем таймер
function updateTimer() {
  const endDate = new Date('2024-03-10T00:00:00'); // Здесь указываем конечную дату
  const now = new Date();
  const timeDiff = endDate - now;

  if (timeDiff <= 0) {
    document.getElementById('timer').textContent = 'Время истекло!';
    return;
  }

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.getElementById('timer').textContent = `До завершения сбора активности для сундуков осталось: ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
}

// Обновляем рейтинг и таймер каждую секунду
function updateAll() {
  displayPlayersRanking();
  displayBestPlayer();
  updateChestsProgress();
  updateTimer();
}

setInterval(updateAll, 1000); // Вызываем обновление каждую секунду
updateAll(); // Вызываем обновление сразу, чтобы информация отобразилась при загрузке страницы