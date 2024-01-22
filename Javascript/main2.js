//elementos 

let display = document.getElementById('timer')
let play = window.document.getElementById('play')
let pause = document.getElementById('pause')
let reset = window.document.getElementById('stop')
let duration = 0
let countdownId = 0


/* let state = {
    isRunning: false,
    minutes: 25,
    seconds: 0,
} */


play.addEventListener("click", () => {
    /* if (state.isRunning) {
        clearInterval(countdownId)
    } */
    let minutes = window.document.getElementById('minutes').textContent
    let seconds = window.document.getElementById('seconds').textContent 

    
    //abaixo, uso o toggle pra mudar de play para pause junto ao CSS
    document.documentElement.classList.toggle('running')
    /* vou declarar a variavel que vai receber a duracao
    assim, vou pegar o conteudo do texto do meu span (no HTML)
    e transformar em um numero. */
    //duration = Number(minutes.textContent)*60 + Number(seconds.textContent)
    //console.log(duration)
    countdown(minutes, seconds)
    timer()
}) 
 

function timer() {
    
    // state.isRunning = document.documentElement.classList.toggle('running')
   
    
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds 

   

    
    /* let timing = duration;
    let minutes, seconds; 
    

    countdownId = setInterval(() => {

        minutes = Math.floor((timing / 60))
        seconds = Math.floor((timing % 60))
        
        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds 
        

        timing--
        
        display.innerHTML = `${minutes}:${seconds}` */

        /* if (timing < 0) {
            clearInterval(state.countdownId)
            return 
        } */
       
   

}

function countdown(minutes, seconds) {
    countdownId = setInterval( () => {

        seconds--
        if (seconds < 0) {
            minutes--
            seconds = 59
        }
    
        if (minutes < 0) {
            clearInterval(countdownId)
        }

        display.innerHTML = `${minutes}:${seconds}`
        }, 1000 )
}

function pauseTimer() {
    clearInterval(countdownId)
    document.documentElement.classList.toggle('running')
}

function resetTimer() {
    clearInterval(countdownId)
    state.isRunning = false
    duration = 0
    document.documentElement.classList.remove('running')
    displayTime()

    
}

function displayTime() {
    minutes.setAttribute('contenteditable', true)
    seconds.setAttribute('contenteditable', true) 
    
    minutes.onkeypress = (event) => /\d/.test(event.key)

    minutes.addEventListener("blur", (event) => {
        let time = event.currentTarget.textContent
        time = time > 60 ? 60 : time
        state.minutes = time
    }) 

}

display.addEventListener("click", displayTime)
pause.addEventListener("click", pauseTimer)
reset.addEventListener("click", resetTimer)







