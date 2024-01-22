let display = window.document.querySelector('#display')
let buttons = window.document.getElementById('controls')
let intervalId = 0 
let duration = 0


function setTimer(duration) {
    let minutes = Number(document.getElementById('minutes').value)
    let seconds = Number(document.getElementById('seconds').value)
    duration = (minutes * 60) + seconds

    minutes = Math.floor(duration / 60)
    seconds = Math.floor(duration % 60)

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2,"0")}`
}

function playPause() {
    
    let play = document.getElementById('play')
    let pause = document.getElementById('pause')
    let action = buttons.getAttribute('action')  

    clearInterval(intervalId)

    if (action == 'start' || action == 'continue') {

        intervalId = setInterval(() => {
            duration--
            formatTime(duration)

        }, 1000)
        
        document.documentElement.classList.toggle('running')
        pause.setAttribute('action', 'pause')
    } else if (action == 'pause') {
        document.documentElement.classList.toggle('running')
        play.setAttribute('action', 'continue')
    } 

    
}

function formatTime(time) {
    display.innerText = setTimer(time)
}

function resetTime() {
    clearInterval(intervalId)
    duration = 0
    formatTime(duration)
    const play = document.getElementById('play')
    play.setAttribute('action', 'start') 
    document.documentElement.classList.toggle('running')
}



