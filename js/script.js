var cenarios = ['skyloft', 'thunderhead', 'pumpkin', 'outrasIlhas', 'faron','eldin','lanayru'];
var musicaAtual;
var mutado = 'nao';

var personagens = Array();


function digitandoAuto(txt) {

    if (personagens.indexOf(txt) == -1){
        personagens.push(txt);
        var elem = document.getElementById(txt);
        var cont = 0;
        var id = setInterval(frame,100);

        function frame() {
            if(cont > txt.length){
                clearInterval(id);
            }else{
                elem.innerHTML += txt.toUpperCase().charAt(cont);
                cont++;
            }
        }
    }
}


// Funções para a pagina Cenarios
function mostraCenario(txt){

    if(txt != ''){
        document.getElementById('cenarios').style.opacity = 1;
    }

    for (let i = 0; i < cenarios.length; i++) {
        // Oculta todas os textos 
        document.getElementById(cenarios[i]).style.opacity = 0;
        document.getElementById(cenarios[i]).style.zIndex = 0;
        document.getElementById('lbl'+cenarios[i]).style.fontWeight = 'normal';
        document.getElementById('lbl'+cenarios[i]).style.textDecoration = 'none';
        // Pausa todas as musicas e coloca a elas no inicio
        document.getElementById('audio'+cenarios[i]).pause();
        document.getElementById('audio'+cenarios[i]).currentTime = 0;
    }
    
    document.getElementById('lbl'+txt).style.textDecoration = 'underline';
    document.getElementById('lbl'+txt).style.fontWeight = 'bold';
    document.getElementById(txt).style.opacity = 1;
    document.getElementById(txt).style.zIndex = 1;
    
    // Salva a musica que esta tocando no momento e inicia ela
    musicaAtual = txt;
    document.getElementById('audio'+txt).play();
    
    // Verifica se o usuario mutou a musica
    if(mutado == 'nao'){
        document.getElementById('audio'+txt).volume = 0.04;
    }else{
        document.getElementById('audio'+txt).volume = 0;
    }
    
    // Quando o usuario mudar de cenario o scroll vai para o topo
    document.getElementById('cenarios').scrollTop = 0;
}

function mostraMapa(){
    document.getElementById('mapa').style.opacity = 1;
}

function someMapa(){
    document.getElementById('mapa').style.opacity = 0;
}

function mutarMusicas(){
    
    if(mutado == 'nao'){
        document.getElementById('audio'+musicaAtual).volume = 0;
        document.getElementById('imgaudio').src = "../imagem/som_desligado.png";
        mutado = 'sim';
    }else{
        document.getElementById('audio'+musicaAtual).volume = 0.04;
        document.getElementById('imgaudio').src = "../imagem/som_ligado.png";
        mutado = 'nao';
    }
}

window.onload = function() {
    var context = new AudioContext();
}