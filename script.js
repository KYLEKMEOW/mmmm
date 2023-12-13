document.addEventListener("DOMContentLoaded", function () {
    // Пример данных для рейтинга (замените их своими данными)
    const players = [
        { name: '️👗🪙👑🧑‍💻💘❄️KYLEK_MEOW', score: 39948771 },
        { name: '👗🪙👑🧑‍💻💘❄️GoGoMeMe', score: 31049881 },
        { name: '👗🪙👑🧑‍💻💘❄️Hola COLA', score: 25944881 },
		{ name: '👗🪙👑🧑‍💻💘❄️Joline', score: 38777661 },
		{ name: '👗🪙👑🧑‍💻💘❄️Pell', score: 29888111 },
		{ name: '👗🪙✒️ⓂAmnistaria', score: 9999999 },
        // Добавьте своих игроков, при необходимости
    ];

    // Функция для форматирования чисел
// Функция для форматирования чисел
function formatNumber(number) {
    if (number >= 40000000) return 'max'; // Добавлено условие для предела в 20 миллионов
    if (number >= 1e6) return (number / 1e6).toFixed(2) + 'm';
    if (number >= 1e3) return (number / 1e3).toFixed(2) + 'k';
    return number.toString();
}

    // Сортировка игроков по убыванию очков
    players.sort((a, b) => b.score - a.score);

    // Вставка данных рейтинга в HTML
    const playerRatingContainer = document.getElementById('player-rating');
    players.forEach((player, index) => {
        const playerRow = document.createElement('div');
        playerRow.classList.add('player-row');

        const playerName = document.createElement('div');
        playerName.classList.add('player-name');
        playerName.textContent = `${index + 1}. ${player.name}`;

        const playerScore = document.createElement('div');
        playerScore.classList.add('player-score');
        playerScore.textContent = formatNumber(player.score);

        playerRow.appendChild(playerName);
        playerRow.appendChild(playerScore);

        playerRatingContainer.appendChild(playerRow);
    });

    // Пример уведомления
    const notificationContainer = document.getElementById('notification');
    setTimeout(() => {
        notificationContainer.style.display = 'none';
    }, 9000000); // Убрать уведомление через 5 секунд
});
// Функция для имитации покупки товара (замените на свою логику)
function buyProductEve(EveProductName, Eve, bonusEve, price) {
    alert(`Вы успешно купили временный набор ${EveProductName} за ${price} рублей! Получено ${Eve}+${bonusEve} Взлома.`);
}
// Функция для имитации покупки товара (замените на свою логику)
function buyProduct(productName, gold, bonusGold, price) {
    alert(`Вы успешно купили набор ${productName} за ${price} рублей! Получено ${gold}+${bonusGold} золота.`);
}

// Функция для имитации покупки специального предложения (замените на свою логику)
function buySpecialOffer(offerName, gold1, gold2, price) {
    alert(`Вы успешно купили ${offerName} за ${price} рублей! Получено ${gold1}+${gold2} золота.`);
}




function startSpecialOfferTimer() {
    const timerElement = document.getElementById('special-offer-timer');
    const endDate = new Date('2023-12-11T23:59:59'); // Установите вашу конечную дату

    function updateTimer() {
        const now = new Date();
        const timeDifference = endDate - now;

        if (timeDifference > 0) {
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            timerElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        } else {
            clearInterval(timerInterval);
            timerElement.textContent = 'Время вышло!';
            // Дополнительные действия после окончания таймера
        }
    }

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Обновляем таймер сразу после старта
}

startSpecialOfferTimer(); // Запускаем таймер при загрузке страницы

// Функция для перехода на другую страницу
function goToPurchasePage() {
    window.location.href = 'shop.html'; // Замените 'purchase.html' на название вашего файла новой страницы
}
// Функция для перехода на другую страницу
function goToHomePage() {
    window.location.href = 'index.html'; // Замените 'purchase.html' на название вашего файла новой страницы
}

// Функция для обновления прогресс бара и информации о лиге
function updateUI(activityPoints2, league, rewardInfo, nextLeague) {
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = (activityPoints2 / 6000000) * 100 + '%';

  document.getElementById('activity-points').innerText = formatNumber(activityPoints2);
  document.getElementById('current-league').innerText = league;
  document.getElementById('reward-info').innerText = rewardInfo;
  document.getElementById('next-league').innerText = nextLeague;
}

// Функция для форматирования чисел
function formatNumber(number) {
 // if (number >= 1000000000) {
 //   return (number / 1000000000).toFixed(1) + 'b';
    if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + 'm';
  }	else if (number >= 1000) {
    return (number / 1000).toFixed(1) + 'k';
  } else {
    return number.toString();
  }
}

// Функция для обновления лиги и отображения информации о награде
function updateLeagueAndRewards(activityPoints2) {
  let league = '';
  let rewardInfo = '';
  let nextLeague = '';
  
  
    if(activityPoints2 >= 40000000) {
    league = 'Название лиги заблокированно';
    rewardInfo = 'х77 777 золота + х10 MeowPaka Ангел';
    nextLeague = 'В данный момент это макисмальная лига.';	
  } else if(activityPoints2 >= 35000000) {
    league = 'Житель';
    rewardInfo = 'х11.111 Золота';  
	nextLeague = '40 000 000';
  } else if(activityPoints2 >= 25000000) {
    league = 'Король мета-вселеной';
    rewardInfo = 'х999 золота'; 
	nextLeague = '35 000 000';
  } else if(activityPoints2 >= 20000000) {
    league = 'Король галактики';
    rewardInfo = 'х5 MeowPaka зомби';
	nextLeague = '25 000 000';
  } else if(activityPoints2 >= 15000000) {
    league = 'Королей вселеной';
    rewardInfo = 'х19.000 золота!';
	nextLeague = '20 000 000';
  } else if(activityPoints2 >= 10000000) {
    league = 'Королей мира';
    rewardInfo = 'х9000 золота + х5 MeowPaka "Повар", х5 MeowPaka "Злыдень", х5 MeowPaka "Шутник" ';
	nextLeague = '15 000 000';
  } else if(activityPoints2 >= 7000000) {
    league = 'Легендарных КОРОЛЕЙ';
    rewardInfo = 'х5 MeowPaka "Повар" + 777 золота';
	nextLeague = '10 000 000';
  } else if(activityPoints2 >= 6000000) {
    league = 'Королей';
    rewardInfo = 'х12 000 золота';
	nextLeague = '7 000 000';
  } else if(activityPoints2 >= 3000000) {
    league = 'Смешных Легенд';
    rewardInfo = 'х5 MeowPaka Злыдень';
	nextLeague = '6 000 000';
  } else if(activityPoints2 >= 1500000) {
    league = 'Сильных Легенд';
    rewardInfo = 'х500 золота';
	nextLeague = '3 000 000';
  } else if (activityPoints2 >= 1000000) {
    league = 'Легенд';
    rewardInfo = '+15 000 комфорта';
	nextLeague = '1 500 000';
  } else if (activityPoints2 >= 500000) {
    league = 'Активных';
    rewardInfo = 'х100 золота';
	nextLeague = '1 000 000';
  } else if (activityPoints2 >= 135000) {
    league = 'Заинтересованных';
    rewardInfo = 'Нет награды';
	nextLeague = '500 000';
  } else if (activityPoints2 >= 35000) {
    league = 'Лентяев';
    rewardInfo = 'Нет награды';
	nextLeague = '135 000';
  } else {
    league = 'Стартующая';
    rewardInfo = 'Нет награды';
	nextLeague = '35 000';
  }

  updateUI(activityPoints2, league, rewardInfo, nextLeague);
}

// Функция для добавления баллов и обновления системы
function addPointsAndRefreshSystem(pointsToAdd) {
  let currentPoints = parseInt(localStorage.getItem('activityPoints2')) || 0;
  currentPoints += pointsToAdd;

  localStorage.setItem('activityPoints2', currentPoints);
  updateLeagueAndRewards(currentPoints);
}

// Имитация добавления баллов каждые 5 секунд
setInterval(function () {
  addPointsAndRefreshSystem(1948); // Имитация добавления 1000 баллов
}, 9000); // Каждые 5 секунд

// Обновление системы при загрузке страницы
window.onload = function () {
  const currentPoints = parseInt(localStorage.getItem('activityPoints2')) || 0;
  updateLeagueAndRewards(currentPoints);
};

// Ваш код для проверки наличия обновлений
const hasUpdate = checkForUpdate();

if (hasUpdate) {
    // Вывести сообщение пользователю
    alert("На сайте доступно обновление. Страница будет перезагружена.");

    // Перезагрузить страницу
    location.reload(true);
}