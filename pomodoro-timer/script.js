const timeElement = document.getElementById("timer");
const btnStartElement = document.getElementById("start-btn");
const btnResetElement = document.getElementById("reset-btn");
const sessionElement = document.getElementById("session-txt");
const sessionContent = sessionElement.innerHTML;
const resetSessionElement = document.getElementById("reset-session-svg");
sessionElement.innerHTML = sessionContent + 0;

const bodyElement = document.body
// добавляем элементы для переключения режимов session/break
const sessionToggleElement = document.getElementById("session-time-toggle");
const breakToggleElement = document.getElementById("break-time-toggle");

let timerInterval = null;
let totalSessionMilliSeconds = 45 * 60 * 1000; // время нашего таймера в мс
let totalBreakMilliSeconds = 15 * 60 * 1000;
//считаем когда таймер должен закончится. Date.now() возвращается время с 1970год в мс поэтому прибавляем наши миллисекунды
let endTime = null;
let mode = 'session';
let sessionCounter = 0;

let endAudio = new Audio('audio/464661__snapper4298__vocal_perc_outro_music.wav')

function myTimer() {
  // из полного времени вычитаем текущее время то есть большее на 1 секунду так как вызов раз в секунду
  // если endSessionTime был 1.600.000ms (600сек наш таймер) то мы вычитаем 1.001.000ms = 599.000 / 1000 = 599секунд и округляем
  let remainingTime = Math.round((endTime - Date.now()) / 1000); // считаем оставшееся время
  if (remainingTime >= 0){
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;

    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    timeElement.innerHTML = `${minutes}:${seconds}`;
  }

  if (remainingTime <= 0) {
    endAudio.play()
    setTimeout(() => {
      endAudio.pause()
      endAudio.currentTime = 0
    },
    10000)
    resetTimer()
    remainingTime = 0;
    clearInterval(timerInterval);
    sessionCounter++;
    sessionElement.innerHTML = sessionContent + sessionCounter;
  }
}

function breakToggle() {
  mode = 'break'
  checkToggle()
}
function sessionToggle(){
  mode = 'session'
  checkToggle()

}

function checkToggle(){
  if(mode === 'session'){
    timeElement.innerHTML = '45:00'
    bodyElement.style['background-image'] = 'url("images/sky-bg.jpeg")'
  } else if (mode === 'break'){
    timeElement.innerHTML = '15:00'
    bodyElement.style['background-image'] = 'url("images/fall-autumn-red-season.jpg")'
  }
  resetTimer()

}


function startTimer() {
  if (timerInterval !== null) {
    return;
  }
  if(mode === 'session'){
    endTime = Date.now() + totalSessionMilliSeconds;
  }
  if(mode === 'break'){
    endTime = Date.now() + totalBreakMilliSeconds;
  }
  
  myTimer();
  timerInterval = setInterval(myTimer, 1000);
  
}

function resetTimer() {
  if (mode === 'session'){
    endTime = Date.now() + totalSessionMilliSeconds; // обновляем время предположительного заканчивания таймера
    timeElement.innerHTML = '45:00'
  } else if (mode === 'break'){
    endTime = Date.now() + totalBreakMilliSeconds; // обновляем время предположительного заканчивания таймера
    timeElement.innerHTML = '15:00'
  }

  clearInterval(timerInterval);
  timerInterval = null;
}

function resetSession() {
  sessionCounter = 0;
  sessionElement.innerHTML = sessionContent + sessionCounter;
}

btnStartElement.addEventListener("click", startTimer);
btnResetElement.addEventListener("click", resetTimer);
resetSessionElement.addEventListener("click", resetSession);
breakToggleElement.addEventListener("click", breakToggle);
sessionToggleElement.addEventListener("click", sessionToggle );
