//variaveis para togglerunning()
let display, time = 0, min, sec, isRunning = false

function displayTime() {

    const minutes = Math.floor((time/60)/60)
    const seconds = time % 60 
    sec = seconds 
    console.log(minutes, seconds)
    const displayScreen = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}` 
    document.getElementById('timer').textContent = displayScreen
    
}



function start() {
    
    display = setInterval(() => {
        
        if (sec !== undefined && sec === 0) {
            clearInterval(display)
            return
        }   
        
        time--

        displayTime()

    }, 1000)
}

function playPause() {
    if (isRunning == true) {
        clearInterval(display)
        isRunning = false
    } else {
        const inputTime = document.getElementById('inputTime').value
        const [mins,secs] = inputTime.split(":")
   
        const timeSeconds = (parseInt(mins, 10)*60*60) + (parseInt(secs, 10))
        console.log(timeSeconds)
        time = timeSeconds 
       
        

        start()
        isRunning = true 

    }
}








var play = window.document.querySelector('#play')
var pause = window.document.querySelector('#pause') 

var minutes = document.getElementById('minutes')
var seconds = document.getElementById('seconds')
/* 
function updateDisplay() {
    minutes.setAttribute('contenteditable', true)
    seconds.setAttribute('contenteditable', true)
    minutes.onkeypress = (event) => /\d/.test(event.key)
    seconds.onkeypress = (event) => /\d/.test(event.key)
} */
/* 
function countDown() {
    let minutes = Number(minutes.Textcontent)
    let seconds = Number(seconds.Textcontent)
    
    seconds--

    if (seconds < 0) {
        minutes--
        seconds = 59
    }

    if (minutes < 0) {
        minutes = 0
    }
} */
/* 
minutes.addEventListener('click', updateDisplay)
seconds.addEventListener('click', updateDisplay)

 */

play.addEventListener('click', () => {
    document.documentElement.classList.toggle('running') 
}) 
pause.addEventListener('click', () => {
    document.documentElement.classList.toggle('running') 
}) 


play.addEventListener('click', toggleRunning)
pause.addEventListener('click', toggleRunning) 


