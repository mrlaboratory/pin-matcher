// alert('ok')



// generate 4 digit pin
function generatePin(){
let randomPin = Math.round(Math.random()*10000)+''

if(randomPin.length === 4){
    return randomPin
}else{
    return  generatePin()
}
}


document.getElementById('generatePinBtn').addEventListener('click',function(){
    document.getElementById('display-pin').value = generatePin();
    notClear()
})


document.getElementById('calculator').addEventListener('click',function(e){
    const display = document.getElementById('type-display')
    const number = e.target.innerText;
if(!isNaN(number)){
    display.value = display.value + number
    notClear()
}else if(number === 'C'){
    display.value = ''
    notClear()
}else if(number === '<'){
    notClear()
   const value = display.value.split('')
   value.pop()
   display.value = value.join('')
}

})

const correctNotify = document.getElementById('correct-notify')
const inCorrectNotify = document.getElementById('incorrect-notify')

document.getElementById('pin-verify').addEventListener('click',function(){
const display = document.getElementById('type-display').value
const typed =  document.getElementById('display-pin').value 
if(display === typed){
    correctNotify.style.display= 'block'
    inCorrectNotify.style.display= 'none'
}else{
    inCorrectNotify.style.display= 'block'
    correctNotify.style.display= 'none'
}
})

function notClear(){
    correctNotify.style.display= 'none'
    inCorrectNotify.style.display= 'none'
}