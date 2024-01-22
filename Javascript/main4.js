let state = {
    isRunning: false,
    minutes: 25,
    seconds: 0,
    countdownId: null
}

let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let playButton = document.getElementById('play')
let pauseButton = document.getElementById('pause')
let resetButton = document.getElementById('stop')
let plusFive = document.getElementById('plusFive')
let minusFive = document.getElementById('minusFive')

function countDown() {
    clearInterval(state.countdownId)

    if (!state.isRunning) {
        return
    }

    let minutes = Number(minutes)
    let seconds = Number(seconds)

    seconds--

    if (seconds < 0) {
        seconds = 59
        minutes--
    }

    if (minutes < 0) {
        return
    }

    formatDisplay()
    state.countdownId = setTimeout(() => countDown() , 1000)
}



function formatDisplay() {
    minutes.textContent = String(state.minutes).padStart(2,"0")
    seconds.textContent = String(state.seconds).padStart(2,"0")
}


function startTimer() {
    if (state.isRunning) {
        clearInterval(state.countdownId)
    }

    state.isRunning = true
    formatDisplay()
    document.documentElement.classList.toggle('running')

    countDown()
    
}

function pauseTimer() {
    state.isRunning = false
    clearInterval(state.countdownId)
    document.documentElement.classList.toggle('running')
}

function resetTimer() {
    state.isRunning = false
    clearInterval(state.countdownId)
    document.documentElement.classList.remove('running')
    state.minutes = 25
    state.seconds = 0
    formatDisplay()
}


playButton.addEventListener("click", () => {
    startTimer()
})

pauseButton.addEventListener("click", () => {
    pauseTimer()
})

resetButton.addEventListener("click", () => {
    resetTimer()
})

minutes.addEventListener("click", () => {
    minutes.setAttribute('contenteditable', true)

    minutes.onkeypress = (event) => /\d/.test(event.key)

    
})

minutes.addEventListener('blur', (event) => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time

    state.minutes = time
    formatDisplayDisplay()
    minutes.removeAttribute('contenteditable') }
)


