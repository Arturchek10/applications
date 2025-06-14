const car1Element = document.getElementById('car1')
const car2Element = document.getElementById('car2') 
const messageElement = document.getElementById('message')

const Racer = function(name, carElement){
  this.name = name
  this.carElement = carElement
  this.position = 0

  this.updateCarPosition = function(position){
    this.position = position
    this.carElement.style.left = this.position + 'px'
  }
  this.randomMove = function() {
    const randomDistance = Math.floor(Math.random() * 10 + 1)
    const fullDistance = randomDistance + this.position
    this.updateCarPosition(fullDistance)
  }
}

const racer1 = new Racer('гонщик1', car1Element)
const racer2 = new Racer('гонщик2', car2Element)

const trackLength = 600 - 50

const declareWinner = function(){
  if(racer1.position >= trackLength && racer2.position < trackLength){
		messageElement.textContent = racer1.name + ' победил!'
	} else if (racer1.position < trackLength && racer2.position >= trackLength){
		messageElement.textContent = racer2.name + ' победил!'
	} else if (racer1.position >= trackLength && racer2.position >= trackLenght ){
		messageElement.textContent = 'Ничья'
	}
}

function startRace(){
  messageElement.textContent = ''
  racer1.position = 0
  racer2.position = 0

  const gameInterval = setInterval(()=>{
    racer1.randomMove()
    racer2.randomMove()
    if (racer1.position >= trackLength || racer2.position >= trackLength ){
      declareWinner()
      clearInterval(gameInterval)
    }
  }, 100)
}

const btn = document.getElementById('start-btn')

btn.addEventListener('click', startRace)