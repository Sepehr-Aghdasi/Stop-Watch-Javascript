const $ = document;

const startStopBtn = $.getElementById("startStopBtn");
const resetBtn = $.getElementById("resetBtn");
const display = $.getElementById("display");

let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let status = true;

startStopBtn.addEventListener("click", timer);

// If our Stop watch start working than enable the Reset button
resetBtn.addEventListener("click", () => {
      if (seconds > 0 || minutes > 0 || hours > 0) {
            resetTimer();
      } else {
            resetBtn.disabled = false;
      }
});

function stopWatch() {
      seconds++;

      if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                  minutes = 0;
                  hours++;
                  if (hours === 24) {
                        location.reload(true);
                  }
            }
      }

      // This Code is for display like this => 00:00:00
      // if seconds , etc.. is under 10 show like this 00:00:00
      if (seconds < 10) {
            displaySeconds = "0" + seconds.toString();
      } else {
            displaySeconds = seconds;
      }
      if (minutes < 10) {
            displayMinutes = "0" + minutes.toString();
      } else {
            displayMinutes = minutes;
      }
      if (hours < 10) {
            displayHours = "0" + hours.toString();
      } else {
            displayHours = hours;
      }

      display.innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

function timer() {
      if (status === true) {
            interval = setInterval(stopWatch, 1);
            startStopBtn.innerHTML = "Stop";
            startStopBtn.classList.add("redColorClass");

            if (startStopBtn.classList.contains("greenColorClass")) {
                  startStopBtn.classList.remove("greenColorClass");
                  startStopBtn.classList.add("redColorClass");
            }

            status = false;
      } else {
            clearInterval(interval);
            startStopBtn.innerHTML = "Start";

            if (startStopBtn.classList.contains("redColorClass")) {
                  startStopBtn.classList.remove("redColorClass");
                  startStopBtn.classList.add("greenColorClass");
            }

            status = true;
      }
}

function resetTimer() {
      seconds = 0;
      minutes = 0;
      hours = 0;

      status = false;
      startStopBtn.innerHTML = "Start";
      startStopBtn.style.color = "#008d18";
      startStopBtn.style.outlineColor = "#008d18";
      display.innerHTML = "00:00:00";

      clearInterval(interval);
      status = true;
}
