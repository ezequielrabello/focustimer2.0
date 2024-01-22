//capturando os botoes
let playButton = document.getElementById('play')
let pauseButton = document.getElementById('pause')
let resetButton = document.getElementById('stop')
let countdownId = 0

//criando a funcao que faz o countdown

function countdown() {
    
    //primeiro, vamos capturar os dados
    let minutes = Number(document.getElementById('minutes').value)
    let seconds = Number(document.getElementById('seconds').value)

    //depois, os segundos vao sempre perder o valor 1
    seconds--
    if (seconds < 0) {
        seconds = 59
        minutes--
    }

    if (minutes < 0) {
        return
    }

    //aqui temos que declarar uma variavel para receber o setInterval
    
    countdownId = setTimeout(() => countdown() , 1000)

    updateDisplay(minutes, seconds)


}

//agora temos que ter uma funcao que atualize o display enquanto o countdown estiver rolando
function updateDisplay(min, sec) {

    min.textContent = String(minutes).padStart(2,"0")
    sec.textContent = String(seconds).padStart(2,"0")
}


//eu vou querer ter uma funcao desse tipo que vai iniciar o meu timer

playButton.addEventListener("click", () => {
    countdown()
    console.log(minutes)
})

