const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
width = canvas.width = innerWidth
height = canvas.height = innerHeight 

function resizeWindow(){
  width = canvas.width = window.innerWidth
  height = canvas.height = window.innerHeight
}
resizeWindow()
window.addEventListener('resize', resizeWindow)

let jpnTxt = "きぎささちだレルハポロメグクギキツッ"
let jpnArr = jpnTxt.split('')
let bynaryTxt = [0,1]
let latinTxt =  "А+Б0В-Г1Д=Е2Ё Ж3З И4Й К5Л М6Н О7П Р8С Т9У Ф!Х Ц?Ч Ш.ЩЪ,Ы Ь:ЭЮ;Я".split('')
let fontSize = 16
let columns = Math.floor(width / fontSize)  
let arr = [] // для определения координаты y
console.log(columns);
for (let i = 0; i < columns; i++){
  arr[i] = 1
}
console.log(...arr);
console.log(arr.slice().length)

function draw(){
  ctx.fillStyle =  "rgb(0, 0, 0, .05)" // цвет фона

  ctx.fillRect(0,0,width,height)

  ctx.fillStyle = "#00ff00" 

  ctx.font = fontSize + "px sistem ui"

  for (let i = 0; i < arr.length; i++){
    let txt = latinTxt[Math.floor(Math.random() * latinTxt.length)] 
    // let txt = jpnArr[Math.floor(Math.random() * jpnArr.length)] 
    ctx.fillText(txt, i * fontSize, arr[i] * fontSize) //(текст для вывода, x, y)
    if(arr[i] * fontSize > height && Math.random() > 0.975){
      arr[i] = 0
    } 
    arr[i]++
  }
}

// setInterval(draw, 50)  