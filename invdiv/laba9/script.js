let userAttempts = 0;
let pcAttempts = 0;
let userTotal = 0;
let pcTotal = 0;
let userName = prompt("Як вас звати?", '');

function generateCards() {
    if (!userName) {
        userName = prompt('Як вас звати?');

        if (!userName) {
            alert('Будь ласка, введіть ваше ім\'я.');
            return;
        }

        document.getElementById('userName').innerText = `Гравець: ${userName}`;
    }

    generateRandomCard('userCard');
    generateRandomCard('pcCard');

    if (userAttempts === 3 && pcAttempts === 3) {
        setTimeout(showResults, 100);
    }
}

function generateRandomCard(cardId) {
    const cards = [
        { value: 6, image: 'six.png' },
        { value: 7, image: 'seven.png' },
        { value: 8, image: 'eight.png' },
        { value: 9, image: 'nine.png' },
        { value: 10, image: 'ten.png' },
        { value: 2, image: 'jack.png' },
        { value: 3, image: 'quin.png' },
        { value: 4, image: 'king.png' },
        { value: 11, image: 'ace.png' }
    ];

    const randomIndex = Math.floor(Math.random() * cards.length);
    const randomCard = cards[randomIndex];
    displayCard(cardId, randomCard.image, randomCard.value);

    if (cardId === 'userCard') {
        userTotal += randomCard.value;
        document.getElementById('userResult').innerText = `Гравець: ${userTotal}`;
    } else if (cardId === 'pcCard') {
        pcTotal += randomCard.value;
        document.getElementById('pcResult').innerText = `Комп'ютер: ${pcTotal}`;
    }

    userAttempts++;
    pcAttempts++;
}

function displayCard(cardId, cardImage, cardValue) {
    const cardElement = document.getElementById(cardId);
    const imageElement = document.createElement('img');
    imageElement.src = cardImage;
    imageElement.alt = cardImage;

    // Додатково виводимо значення картки
    const valueElement = document.createElement('div');
    valueElement.innerText = cardValue;

    cardElement.innerHTML = ''; // Очищення контейнера перед додаванням нових елементів
    cardElement.appendChild(valueElement);
    cardElement.appendChild(imageElement);
}

function showResults() {
    document.getElementById('userResult').innerText = `Загальний рахунок гравця: ${userTotal}`;
    document.getElementById('pcResult').innerText = `Загальний рахунок комп'ютера: ${pcTotal}`;

    if (userAttempts === 3 && pcAttempts === 3) {
        alert(`Гравець: ${userTotal}\nКомп'ютер: ${pcTotal}`);

        if (userTotal > pcTotal) {
            alert('Гравець переміг!');
        } else if (userTotal < pcTotal) {
            alert('Комп\'ютер переміг!');
        } else {
            alert("Нічия!");
        }

        // Очистимо змінні
        userAttempts = 0;
        pcAttempts = 0;
        userTotal = 0;
        pcTotal = 0;

        // Очистимо вміст карт
        document.getElementById('userCard').innerHTML = '';
        document.getElementById('pcCard').innerHTML = '';

        // Очистимо вміст результатів
        document.getElementById('userResult').innerText = '';
        document.getElementById('pcResult').innerText = '';
    }
}

// Перейменовано для уникнення конфліктів
function calculateSum(total) {
    const numbers = total.toString().split('').map(Number);
    return numbers.reduce((sum, num) => sum + num, 0);
}
