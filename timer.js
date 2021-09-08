function startTimer(duration,display) {
    var timer = duration, seconds;
    setInterval function() {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.TextContent = seconds;

        if (--timer <0) {
            timer = duration;
        }
    },1000);
}

window.onload = function () {
    var fiveSeconds = 5;
    display = document.querySelector('time');
    startTimer(fiveSeconds, display);
};