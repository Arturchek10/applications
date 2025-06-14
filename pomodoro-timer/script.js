const timeElement = document.getElementById('timer')
const btnStartElement = document.getElementById('start-btn')
const btnResetElement = document.getElementById('reset-btn')
const sessionElement = document.getElementById('session-txt')
const sessionContent = sessionElement.innerHTML
const resetSessionElement = document.getElementById('reset-session-svg')
sessionElement.innerHTML = sessionContent + 0

let timerInterval = null
let totalSeconds = 45 * 60
let sessionCounter = 0
function myTimer(){
  let minutes = Math.floor(totalSeconds / 60)
  let seconds = totalSeconds % 60 
  
  if (minutes < 10){
    minutes = '0' + minutes
  }
  if (seconds < 10){
    seconds = '0' + seconds
  }

  totalSeconds--

  timeElement.innerHTML = `${minutes}:${seconds}`

  if (totalSeconds < 0){
    clearInterval(timerInterval)
    sessionCounter++
    sessionElement.innerHTML = sessionContent + sessionCounter
  }
}

function startTimer(){
  if (timerInterval !== null) {
    return
  };
  timerInterval = setInterval(myTimer, 1000)  
  console.log(sessionElement.innerHTML);

}

function resetTimer(){
  totalSeconds = 45 * 60  // сбрасываем глобальную переменную на прежнее значение
  let minutes = Math.floor(totalSeconds / 60)
  let seconds = totalSeconds % 60

  if (minutes < 10){
    minutes = '0' + minutes
  }
  if (seconds < 10){
    seconds = '0' + seconds
  }
  timeElement.innerHTML = `${minutes}:${seconds}`

  clearInterval(timerInterval)
  timerInterval = null
}

function resetSession(){
  sessionCounter = 0
  sessionElement.innerHTML = sessionContent + sessionCounter
}

btnStartElement.addEventListener('click', startTimer)
btnResetElement.addEventListener('click', resetTimer)
resetSessionElement.addEventListener('click', resetSession)