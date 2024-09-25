SIMBOLO = ['X', 'O'];
JOGADAS = 0;

function marcaJogada(campo){
    let elemento = document.getElementById(campo.id);

    if(JOGADAS % 2 == 0){
        elemento.innerText = 'X';
    }else{
        elemento.innerText = 'O';
    }

    JOGADAS++;

    if(JOGADAS == 9){
        var modal = new bootstrap.Modal(document.getElementById('modalResultado'));
        document.getElementById('campoTitle').innerText = 'Jogo empatou';
        modal.show();
    }

    elemento.onclick = null;
    confereJogada();
}

function zeraJogo(){
    let botoes = document.getElementsByClassName('btn');

    for (var i = 0; i < botoes.length; i++) {
        var button = botoes[i];
        
        button.innerText = '';
    }
    JOGADAS = 0;
    location.reload();

}

function confereJogada(){
    let campo_01 = document.getElementById('campo_01').innerText;
    let campo_02 = document.getElementById('campo_02').innerText;
    let campo_03 = document.getElementById('campo_03').innerText;
    let campo_04 = document.getElementById('campo_04').innerText;
    let campo_05 = document.getElementById('campo_05').innerText;
    let campo_06 = document.getElementById('campo_06').innerText;
    let campo_07 = document.getElementById('campo_07').innerText;
    let campo_08 = document.getElementById('campo_08').innerText;
    let campo_09 = document.getElementById('campo_09').innerText;

    jogadorVencedor = ''
    teveVencedor = false;

    if(campo_01 === campo_02 && campo_02 === campo_03 && campo_02 !== ''){
        jogadorVencedor = campo_01
        teveVencedor = true;
    }else if(campo_01 === campo_04 && campo_04 ===campo_07 && campo_04 !== ''){
        jogadorVencedor = campo_01
        teveVencedor = true;
    }else if(campo_01 === campo_05 && campo_05 === campo_09 && campo_05 !== ''){
        jogadorVencedor = campo_01
        teveVencedor = true;
    }else if(campo_04 === campo_05 && campo_05 === campo_06 && campo_05 !== ''){
        jogadorVencedor = campo_04
        teveVencedor = true;
    }else if(campo_02 === campo_05 && campo_05 === campo_08 && campo_05 !== ''){
        jogadorVencedor = campo_02
        teveVencedor = true;
    }else if(campo_03 === campo_06 && campo_06 === campo_09 && campo_06 !== ''){
        jogadorVencedor = campo_03
        teveVencedor = true;
    }else if(campo_07 === campo_08 && campo_07 === campo_09 && campo_07 !== ''){
        jogadorVencedor = campo_07
        teveVencedor = true;
    }else if(campo_03 === campo_05 && campo_05 === campo_07 && campo_07 !== ''){
        jogadorVencedor = campo_03
        teveVencedor = true;
    }

    if(teveVencedor){
        var modal = new bootstrap.Modal(document.getElementById('modalResultado'));
        document.getElementById('campoTitle').innerText = 'O Jogador ' + jogadorVencedor + ' Ganhou!';
        modal.show();
    }
}