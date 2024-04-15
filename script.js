//***RECURSOS UTILIZADOS: RELÓGIO EM TEMPO REAL, ABRIR POP-UP NO CENTRO DA PÁGINA E MUDAR A COR DE FUNDO DA PÁGINA (TRÊS RECURSOS, COMO SOLICITADO NA ATIVIDADE).***

const checkbox = document.getElementById('checkboxId');
const focoBt = document.querySelector(".app__card-button--foco");
const descansoBt = document.querySelector(".app__card-button--curto");
const cronometroTempo = document.querySelector(".app__card-timer");
const divPomodoro = document.querySelector(".pomodoro__secao__container");
const label = document.querySelector(".label");
const textoPopUp = document.querySelector(".texto__pop__up");
const fraseMotivacional = document.querySelector(".frase__motivacional");
const audioFinalizacao = document.querySelector(".audio__finalizacao");
let timer = 1500;
let intervalo = null;


//MODO ESCURO
checkbox.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  divPomodoro.classList.toggle('dark');
  label.classList.toggle('darkLabel');
})

//BOTÃO DE FOCO
focoBt.addEventListener('click', () => {
  zerarIntervalo();
  focoBt.classList.add("active");
  descansoBt.classList.remove("active");
  timer = 1500;
  intervalo = setInterval(passagemTempo, 1000);
  textoPopUp.style.display = "none";
  fraseMotivacional.style.display = "block";
})

//BOTÃO DE DESCANSO
descansoBt.addEventListener('click', () => {
  zerarIntervalo();
  descansoBt.classList.add("active");
  focoBt.classList.remove("active");
  timer = 300;
  intervalo = setInterval(passagemTempo, 1000);
  textoPopUp.style.display = "block";
  fraseMotivacional.style.display = "none";
})


//PASSAGEM E FORMATAÇÃO DO TEMPO
function passagemTempo() {
  if (timer <= 0) {
    audioFinalizacao.play();
    alert("O tempo acabou!");
    zerarIntervalo();
  } else {
    timer -= 1;
    const tempo = new Date(timer * 1001);
    const tempoFormatado = tempo.toLocaleString('pt-Br', {minute: '2-digit', second: '2-digit'});
    cronometroTempo.innerHTML = tempoFormatado;
    cronometroTempo.style.color = "var(--branco)";
  }
}

//ZERANDO O TEMPO
function zerarIntervalo() {
  clearInterval(intervalo);
  intervalo = null;
}


//POP-UP DE VÍDEO DE GATINHOS PARA O TEMPO DE DESCANSO
var win = null;
function NovaJanela(pagina,nome,w,h,scroll){
    LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
    TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
    settings = 'location=no,toolbar=no,directories=no,status=no,height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable';
    win = window.open(pagina,nome,settings);
}        