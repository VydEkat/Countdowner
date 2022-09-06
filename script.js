const secsEl = document.getElementById('s')
const minsEl = document.getElementById('m')
const hoursEl = document.getElementById('h')
const daysEl = document.getElementById('d')

const NewYear = '1 Jan 2023'

function countdown() {
    const NewYearDate = new Date(NewYear);
    const currentDate = new Date();

    const diff = NewYearDate - currentDate
    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 3600)) % 24;
    const days = Math.floor(diff / (3600 * 24 * 1000)); 

    secsEl.innerHTML = formatTime(seconds);
    minsEl.innerHTML = formatTime(minutes);
    hoursEl.innerHTML = formatTime(hours);
    daysEl.innerHTML = days;
}

function formatTime (time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);
