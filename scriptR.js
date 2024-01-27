// Пример данных об игроках
const players = [
    { name: '☃️🛡️🫂👗🪙👑🧑‍💻💘❄️KYLEK_MEOW', score: 89460209 },
    { name: '☃️👗🪙👑🧑‍💻💘❄️GoGoMeMe', score: 76570562 },
    { name: '💗☃️🛡️🫂👗🪙👑🧑‍💻💘❄️Hola COLA', score: 198216107 },
    { name: '☃️👗🪙👑🧑‍💻💘❄️Joline', score: 64676963 },
    { name: '☃️👗🪙👑🧑‍💻💘❄️Pell', score: 14886102 },
	{ name: '💗☃️🛡️GameOON!', score: 298201841 },
	{ name: '💗☃️👗🪙✒️ⓂAmnistaria', score: 0 },
	{ name: '🛡️[KM] KYLKI🛡️', score: 0 },
	{ name: '[Куку]Кукусики', score: 0 },
];

const targetScore = 1000000000; // 10 000 000, 25 000 000, 50 000 000, 100 000 000, 500 000 000, 1 000 000 000, 5 000 000 000, 15 000 000 000, 100 000 000 000
const rewardAmount = 1000; // 14, 140, 144, 214,1014, 1000, 1144, 1400, 1414
let totalScore = 5;

// Функция для форматирования чисел
function formatNumber(number) {
    return number.toLocaleString();
}

// Функция для обновления топа и прогресса
function updateTopPlayers() {
    const playerListBody = document.getElementById('playerListBody');
    const progressFillElement = document.getElementById('progressFill');
    const goalCountElement = document.getElementById('goalCount');
    const rewardElement = document.getElementById('reward');
    const lastUpdateElement = document.getElementById('lastUpdate');

    playerListBody.innerHTML = '';
    totalScore = 0;

    players.sort((a, b) => b.score - a.score); // Сортируем игроков по убыванию очков

    players.slice(0, 3).forEach((player, index) => {
        const position = index + 1;
        const row = `<tr>
                        <td>${position}</td>
                        <td>${player.name}</td>
                        <td>${formatNumber(player.score)}</td>
                    </tr>`;
        playerListBody.innerHTML += row;
        totalScore += player.score;
    });

    players.slice(3, 5).forEach((player, index) => {
        const position = index + 4; // 4 и 5 место
        const row = `<tr>
                        <td>${position}</td>
                        <td>${player.name}</td>
                        <td>${formatNumber(player.score)}</td>
                    </tr>`;
        playerListBody.innerHTML += row;
        totalScore += player.score;
    });

    const progressPercentage = (totalScore / targetScore) * 100;
    progressFillElement.style.width = `${progressPercentage}%`;
    goalCountElement.innerText = formatNumber(totalScore);

    // Обновление цели
    const targetElement = document.getElementById('target');
    const remainingGoal = targetScore - totalScore;
    targetElement.innerText = formatNumber(remainingGoal);

    // Проверка выполнения цели
    if (totalScore >= targetScore) {
        goalCountElement.classList.add('goal-achieved');
        targetElement.classList.add('goal-achieved');
        goalCountElement.innerText = 'Цель выполнена!';
        rewardElement.innerText = `Поздравляем! Вы дошли до цели, за это вы получаете: х${formatNumber(rewardAmount)} золота.`;
    } else {
        goalCountElement.classList.remove('goal-achieved');
        targetElement.classList.remove('goal-achieved');
        rewardElement.innerText = `Награда: х${formatNumber(rewardAmount)} Золота за достижение цели!`;
    }

    // Обновление времени последнего обновления
    const now = new Date();
    const lastUpdateString = formatLastUpdate(now);
    lastUpdateElement.innerText = lastUpdateString;
}

// Функция для форматирования времени последнего обновления
function formatLastUpdate(date) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('ru-RU', options).format(date);
    return ` ${formattedDate} `;
}

// Инициализация
updateTopPlayers();

// Таймер обратного отсчета
const eventEndDate = new Date('2024-01-31T19:00:00');
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date();
    const timeRemaining = eventEndDate - now;

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownElement.innerText = `До завершения ивента: ${days} дн. ${hours} ч. ${minutes} мин. ${seconds} сек.`;
    } else {
        countdownElement.innerText = 'Ивент завершен!';
    }
}

setInterval(updateCountdown, 1000);

document.addEventListener("DOMContentLoaded", function() {
  const loadingContainer = document.querySelector('.loading-container');
  const progressBar = document.getElementById('progressBar');

  function simulateLoading() {
    let progress = 0;
    const interval = setInterval(function() {
      progress += 100 / 3; // Прогресс увеличивается на 100 / 14 процентов каждую секунду
      progressBar.style.width = `${progress}%`;

      if (progress >= 100) {
        clearInterval(interval);
        // Скрытие фона после завершения имитации загрузки
        loadingContainer.style.visibility = 'hidden';
      }
    }, 1000);
  }

  simulateLoading();
});