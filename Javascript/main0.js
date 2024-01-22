//criando display para poder alterar os numeros do timer
let display = document.getElementById('timer')

//criando as variaveis de estado da aplicacao
let state = {
    interval: null,
    isRunning: false,
    minutes: 25,
    seconds: 0,
    isMuted: true
}

//pegando os botoes de controle do timer
let playBto = document.getElementById('play')
let pauseBto = document.getElementById('pause')
let stopBto = document.getElementById('stop')
let plusFive = document.getElementById('plusFive')
let minusFive = document.getElementById('minusFive')

//pegando os audios
let AudFloresta = new Audio('./assets/Floresta.wav')
let AudChuva = new Audio('./assets/Chuva.wav')
let AudCafeteria = new Audio('./assets/Cafeteria.wav')
let AudLareira = new Audio('./assets/Lareira.wav')

//pegando o botao dos audios
let floresta = document.getElementById('floresta')
let chuva = document.getElementById('chuva')
let cafeteria = document.getElementById('cafeteria')
let lareira = document.getElementById('lareira')


//pegandos os numeros no span
let minutes = document.getElementById('minutes').textContent
let seconds = document.getElementById('seconds').textContent


//funcao que vai tirar/colocar o icone play/pause do timer
function toggleRunning() {
    document.documentElement.classList.toggle('running')
}

//funcao que toca a musica e muda estilo quando selecionado
function playPauseMusic(audio, button) {
    if (audio.paused) {
        audio.play()
        button.style.backgroundColor = "#FFFA00";
    } else { 
        audio.pause()
        button.style.backgroundColor = "#E1E1E6"
        button.style.background = ""
    }
}

//funcao que vai fazer o countdown
function countdown() {
        
    state.interval = setInterval(() => {
        seconds--
        if (seconds < 0) {
            seconds = 59
            minutes--
        }
        
        if (minutes < 0) {
            return
        }
        
        updateDisplay()
        
    }, 1000)
    
    toggleRunning()
}



//funcao que vai pausar e continuar o timer a partir dos valores pausados
function playPause() {
    toggleRunning()
    clearInterval(state.interval)
}

//funcao que reseta a aplicacao
function stop() {
    document.documentElement.classList.remove('running')
    clearInterval(state.interval)
    minutes = state.minutes
    seconds = state.seconds
    updateDisplay()
}

//funcao que vai atualizar o display ao decorrer do tempo
function updateDisplay() {    
    display.innerHTML = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
}

//funcao que vai adicionar/remover 5 minutos
function plusfive() {
    minutes = Number(minutes)
    minutes += 5
    updateDisplay()
}
function minusfive() {
    if (minutes < 5) {
        clearInterval(state.interval)
        display.innerHTML = `00:00`
        document.documentElement.classList.remove('running')
    } else {
        minutes -= 5
        updateDisplay()
    }
}


//eventListeners Botoes

playBto.addEventListener("click", countdown)
pauseBto.addEventListener("click", playPause)
stopBto.addEventListener("click", stop)
plusFive.addEventListener("click", plusfive)
minusFive.addEventListener("click", minusfive)

//eventListeners Audios

/* muda o estilo do icone da musica ao clicar
e toca de acordo com a musica */
floresta.addEventListener("click", () => {
    playPauseMusic(AudFloresta, floresta)
})
chuva.addEventListener("click", () => {
    playPauseMusic(AudChuva, chuva)
})
cafeteria.addEventListener("click", () => {
    playPauseMusic(AudCafeteria, cafeteria)
})
lareira.addEventListener("click", () => {
    playPauseMusic(AudLareira, lareira)
})





