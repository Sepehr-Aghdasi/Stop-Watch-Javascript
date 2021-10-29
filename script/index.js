const $ = document;

const display = $.getElementById("display");
const startStopBtn = $.getElementById("startStopBtn");
const resetBtn = $.getElementById("resetBtn");

let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let status = false;

function stopWatch() {
      seconds++;

      if (seconds / 60 === 1) {
            seconds = 0;
            minutes++;
            if (minutes / 60 === 1) {
                  minutes = 0;
                  hours++;
                  if (hours === 12) {
                        location.reload();
                  }
            }
      }
      if (seconds < 10) {
            displaySeconds = "0" + seconds;
            // toString()
      } else {
            displaySeconds = seconds;
      }
      if (minutes < 10) {
            displayMinutes = "0" + minutes;
      } else {
            displayMinutes = minutes;
      }
      if (hours < 10) {
            displayHours = "0" + hours;
      } else {
            displayHours = hours;
      }
      display.innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

function startStop() {
      if (status === false) {
            interval = window.setInterval(stopWatch, 1000);
            startStopBtn.innerHTML = "Stop";
            startStopBtn.style.color = "#ff0000";
            startStopBtn.style.outlineColor = "#ff0000";

            status = true;
      } else {
            clearInterval(interval);
            startStopBtn.innerHTML = "Start";
            startStopBtn.style.color = "#008d18";
            startStopBtn.style.outlineColor = "#008d18";

            status = false;
      }
}

startStopBtn.addEventListener("click", () => {
      startStop();
});

resetBtn.addEventListener("click", () => {
      seconds = 0;
      minutes = 0;
      hours = 0;

      status = false;
      startStopBtn.innerHTML = "Start";
      startStopBtn.style.color = "#008d18";

      display.innerHTML = "00:00:00";
});
