"use strict";

function elementsFromHtml(html) {
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

const mainContent = elementsFromHtml(`
    <div>
        <input class="inp" placeholder="Питання">
    <br>
    <div class="center-content">
        <button id="mainButton" class="bu">Дізнатися</button>
        <br>
        <img class="hu" src="./sfera.png" alt="Image Description">
        
        <h3 class="tefich"></h3>
    </div>
    </div>
`);

document.body.appendChild(mainContent);

const values = ["Так!", "Ні", "Однозначно!", "50/50", "Складно<br>сказати..", "Скоріш<br>за все.."];

const myButton = document.getElementById('mainButton');
let silka = document.querySelector('.tefich');
let inputField = document.querySelector('.inp');

myButton.addEventListener('click', function() {
    // Перевірка, чи є текст в полі вводу та чи є знак питання
    if (inputField.value.trim() === "" || !inputField.value.trim().endsWith("?")) {
        alert("Введіть своє запитання та додайте в кінець знак питання.");
    } else {
        const randomIndex = Math.floor(Math.random() * values.length);
        const randomWord = values[randomIndex];
        silka.innerHTML = randomWord;

        // Видалення введеного тексту
        inputField.value = "";
    }
});
