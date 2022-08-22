const daysS = document.getElementById("days");
const hoursS = document.getElementById("hours");
const minutesS= document.getElementById("minutes");
const secondsS = document.getElementById("seconds");



const christmasDay = "24 Dec 2022";


function countdown ()   {
    const christmasDate = new Date (christmasDay);
    const currentDate = new Date();

    const allSeconds = (christmasDate - currentDate) / 1000;

    const days = Math.floor (allSeconds / 3600 / 24);
    const hours =  Math.floor (allSeconds / 3600 % 24);
    const minutes = Math.floor (allSeconds / 60) % 24;
    const seconds = Math.floor (allSeconds) % 60;


    daysS.innerHTML = days;
    hoursS.innerHTML = formatTimer(hours);
    minutesS.innerHTML = formatTimer(minutes);
    secondsS.innerHTML = formatTimer(seconds);
}

function formatTimer(time)  {
    return time < 10? (`${time}`) : time;
}


countdown();
setInterval(countdown, 1000);