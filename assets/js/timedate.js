let Todays;
let TheDate;

function gettheDate()
{
    Todays = new Date();
    TheDate = "" + (Todays.getMonth()+1) + " / " + Todays.getDate() + " / " + (Todays.getFullYear());
    document.getElementById("data").innerHTML = TheDate;
}

let timerID = null;
let countDownID = null;
let timerRunning = false;

function stopclock()
{
    if(timerRunning)
        clearTimeout(timerID);
        clearTimeout(countDownID);
    timerRunning = false;
}

window.onload = function startclock() {
    stopclock();
    gettheDate();
    showtime();
    countdown();
}

function showtime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let timeValue = "" + ((hours > 12) ? hours -12:hours);
    timeValue += ((minutes < 10) ? ":0":":") + minutes;
    timeValue += ((seconds < 10) ? ":0":":") + seconds;
    timeValue += (hours >= 12) ? "P.M.":"A.M.";
    document.getElementById("zegarek").innerHTML = timeValue;
    timerID = setTimeout("showtime()", 1000);
    timerRunning = true;
}

function countdown() {
    let spaceshipStart = new Date("March 18, 2021 09:30:00"); // Your timezone!
    let spaceshipStartEpoch = spaceshipStart.getTime()/1000;
    console.log(spaceshipStart);
    console.log(spaceshipStartEpoch);
    let now = new Date();
    let nowEpoch = Math.floor(now.getTime()/1000);
    console.log(now);
    console.log(nowEpoch);
    let substract = spaceshipStartEpoch - nowEpoch;
    console.log("substract "+ substract);
    // var hours = Math.floor((substract % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // var minutes = Math.floor((substract % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((substract % 60));
    let secondsLeft = substract-seconds;
    console.log("secondsLeft "+ secondsLeft);
    let days = Math.floor(secondsLeft / (60*60*24));
    let daysLeft = secondsLeft - days * 3600*24;
    console.log("daysLeft "+ daysLeft);
    let hours = Math.floor(daysLeft / (60*60));
    let hoursLeft = daysLeft - hours*(60*60);
    console.log("hoursLeft "+ hoursLeft);
    let minutes = Math.floor(hoursLeft / 60);
    let minutesLeft = hoursLeft - minutes*60;
    console.log("minutesLeft "+ minutesLeft);
    // var days        = Math.floor(secondsLeft/24/60/60);
    // var hoursLeft   = Math.floor((secondsLeft) - (days*86400));
    // var hours       = Math.floor(hoursLeft/3600);
    // var minutesLeft = Math.floor((hoursLeft) - (hours*3600));
    // var minutes     = Math.floor(minutesLeft/60);
    console.log(days + "days "+ hours + "h " + minutes + "m " + seconds + "s ");
    let text = days + "days "+ hours + "h " + minutes + "m " + seconds + "s ";
    document.getElementById("countdown").innerHTML = text;
    countDownID = setTimeout("countdown()", 1000);

}
