
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
const Title = document.getElementById("timer-title")

const newYears = "March 30, 2022 20:50:00";

function countDown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / (3600*24));
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const minutes = Math.floor((totalSeconds / 60) %60);
    const seconds = Math.floor((totalSeconds  % 60 ));


    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

    
    if(totalSeconds < 0){
        Title.innerHTML = "Time has Expired";
        daysEl.innerHTML = "0";
        hoursEl.innerHTML = "00";
        minsEl.innerHTML = "00";
        secondsEl.innerHTML = "00";
    }

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countDown();
setInterval(countDown, 1000);

