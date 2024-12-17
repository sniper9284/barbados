const form = document.getElementById('telegramForm');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const { botToken, chatId } = await loadConfig();
    const stol = document.getElementById('stol').value;
    const treck = document.getElementById('treck').value;
    const currentTimeInMoscow = getCurrentTimeInMoscow();
    const message = `Стол №: ${stol}\nПесня №: ${treck}\nВремя заказа: ${currentTimeInMoscow}`;

    await sendDataToTelegram(botToken, chatId, message);
});

async function sendDataToTelegram(token, chatId, message) {
    try {
        const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        console.log("Сообщение успешно отправлено!");
    } catch (error) {
        console.error("Ошибка при отправке сообщения:", error);
    }
}

function getCurrentTimeInMoscow() {
    const date = new Date();
    const offset = date.getTimezoneOffset(); // смещение от UTC в минутах
    const moscowOffset = 180; // Московское время отличается от UTC на 3 часа
    const timeInMoscow = new Date(date.getTime() + (moscowOffset * 60 * 1000));

    let hours = timeInMoscow.getUTCHours();
    let minutes = timeInMoscow.getUTCMinutes();
    let seconds = timeInMoscow.getUTCSeconds();

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

async function loadConfig() {
    const config = {
        botToken: '7554159851:AAG4gnJE9EXTgQr3fiS0v8ch2BY_qq17k0c',
        chatId: '1146706867'
    };

    return config;
}