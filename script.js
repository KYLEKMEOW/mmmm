document.addEventListener("DOMContentLoaded", function () {
    // Пример данных для рейтинга (замените их своими данными)
    const players = [
        { name: '️🫂👗🪙👑🧑‍💻💘❄️KYLEK_MEOW', score: 69188221 },
        { name: '👗🪙👑🧑‍💻💘❄️GoGoMeMe', score: 53991888 },
        { name: '🫂👗🪙👑🧑‍💻💘❄️Hola COLA', score: 49881772 },
		{ name: '👗🪙👑🧑‍💻💘❄️Joline', score: 51000299 },
		{ name: '👗🪙👑🧑‍💻💘❄️Pell', score: 40001999 },
		{ name: '👗🪙✒️ⓂAmnistaria', score: 9999999 },
        // Добавьте своих игроков, при необходимости
    ];

    // Функция для форматирования чисел
// Функция для форматирования чисел
function formatNumber(number) {
    if (number >= 70000000) return '70000000'; // Добавлено условие для предела в 20 миллионов
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
    const endDate = new Date('2023-12-17T23:59:59'); // Установите вашу конечную дату

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
  progressBar.style.width = (activityPoints2 / 25000000) * 100 + '%';

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
    league = 'Наблюдатель';
    rewardInfo = 'х11.000 золота + х10 MeowPaka Ангел';
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
  addPointsAndRefreshSystem(9022); // Имитация добавления 1000 баллов
}, 9000); // Каждые 5 секунд

// Обновление системы при загрузке страницы
window.onload = function () {
  const currentPoints = parseInt(localStorage.getItem('activityPoints2')) || 0;
  updateLeagueAndRewards(currentPoints);
};


// Пример данных (замените на свои данные)
const clubs = [
    {
        name: "[KM] KYLKI",
        players: [
            { name: "🫂👗🪙👑🧑‍💻💘❄️KYLEK_MEOW", contribution: 79000 },
            { name: "🫂👗🪙👑🧑‍💻💘❄️Hola COLA", contribution: 67911 },
            // Добавьте дополнительных игроков при необходимости
        ],
    },
    {
        name: "[Dev]OnlyForDevelopers",
        players: [
            { name: "👗🪙✒️ⓂAmnistaria", contribution: 5555 },
            { name: "Developer", contribution: 5555 },
			{ name: "gg", contribution: 5555 },
			{ name: "Код моя жизнь", contribution: 5555 },
            // Добавьте дополнительных игроков при необходимости
        ],
    },
	    {
        name: "[Куку]Кукусики",
        players: [
            { name: "👗🪙👑🧑‍💻💘❄️GoGoMeMe", contribution: 50000 },
            { name: "👗🪙👑🧑‍💻💘❄️Joline", contribution: 35000 },
			{ name: "👗🪙👑🧑‍💻💘❄️Pell", contribution: 60000 },
            // Добавьте дополнительных игроков при необходимости
        ],
    },
    // Добавьте дополнительные клубы при необходимости
];

// Функция для форматирования чисел в стиле "1k" и "1m"
function formatNumber(number) {
    if (number >= 1e6) {
        return (number / 1e6).toFixed(1) + "m";
    } else if (number >= 1e3) {
        return (number / 1e3).toFixed(1) + "k";
    } else {
        return number.toString();
    }
}

// Функция для отображения клубов на странице
function renderClubs() {
    const clubList = document.getElementById("club-list");
    clubList.innerHTML = "";

    // Сортировка клубов по уровню и вкладу
    clubs.sort((a, b) => {
        const aLevel = getClubLevel(a.players.reduce((total, player) => total + player.contribution, 0));
        const bLevel = getClubLevel(b.players.reduce((total, player) => total + player.contribution, 0));

        // Сначала сортируем по уровню
        if (aLevel !== bLevel) {
            return bLevel - aLevel;
        }

        // Затем по вкладу в случае равенства уровней
        const aContribution = a.players.reduce((total, player) => total + player.contribution, 0);
        const bContribution = b.players.reduce((total, player) => total + player.contribution, 0);
        return bContribution - aContribution;
    });

    clubs.forEach((club) => {
        const clubElement = document.createElement("div");
        clubElement.classList.add("club");

        // Вычисление общего вклада игроков
        const totalContribution = club.players.reduce(
            (total, player) => total + player.contribution,
            0
        );

        const level = getClubLevel(totalContribution);

        clubElement.innerHTML = `
            <h3>${club.name}</h3>
            <p>Вложенное золото: ${formatNumber(totalContribution)}</p>
            <p class="club-level">Уровень: ${level}</p>
            <p>Участники клуба:</p>
            <ul>
                ${club.players.map((player) => `<li>${player.name}: ${formatNumber(player.contribution)}</li>`).join("")}
            </ul>
        `;

        clubList.appendChild(clubElement);
    });
}

// Функция для определения уровня клуба
function getClubLevel(gold) {
    if (gold >= 0 && gold <= 5000) {
        return 1;
    } else if (gold >= 5001 && gold <= 35000) {
        return 2;
    } else if (gold >= 35001 && gold <= 55000) {
        return 3;
    } else if (gold >= 55001 && gold <= 100000) {
        return 4; // Больше 55000, добавьте дополнительные условия при необходимости
	} else {
        return 5;
    }
}

// Вызов функции для отображения клубов при загрузке страницы
window.onload = renderClubs;