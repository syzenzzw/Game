function JogoForca(){
    //declaração das constantes
    const palavraEscolhida = document.getElementById('palavraEscolhida').value;
    const dicaPalavra = document.getElementById('dicaPalavra').value;
    const lblDica = document.getElementById('lblDica');
    const lblPalavra = document.getElementById('lblPalavra');
    const dicaAdivinhacao = document.getElementById('dicaAdivinhacao');
    const palavraAdivinhada = document.getElementById('adivinhaPalavra').value;
    const letraAdivinhada = document.getElementById('escolherUmaLetra').value;

    if (dicaPalavra && palavraEscolhida == null) {
        alert('digite a palavra e a dica');
    }
    else {
        console.log(dicaPalavra, palavraEscolhida);
        EsconderInpts();
        SepararPalavra(palavraEscolhida);
    }
}

function EsconderInpts(){
    this.palavraEscolhida.style.display = 'none';
    this.dicaPalavra.style.display = 'none';
    this.lblDica.style.display = 'none';
    this.lblPalavra.style.display = 'none';
}

function SepararPalavra(palavraEscolhida){
    separacaoLetras = palavraEscolhida.split('');
    console.log(separacaoLetras);
    
    const item = separacaoLetras.length;
    let guardarAnderlaine = '';


    for (let i = 0; i < item; i++) {
        guardarAnderlaine += "_ ";
    }

    document.getElementById('Adivinhacao').innerHTML = guardarAnderlaine;
}


function LogicaDoJogo(letraAdivinhada, palavraAdivinhada){
   let erros = 0;
   let acertos = 0

   if(letraAdivinhada && palavraAdivinhada == null)
   {
    alert('digite uma letra');
   }

   if (separacaoLetras.includes(letraAdivinhada)) {
    acertos += 1;
    console.log('acertos: ', acertos);
   }

   else {
    erros += 1;
    console.log('erros: ', erros)
   }

   if (erros === 7) {
    console.log('acabou o jogo')
    location.reload;
   }
}




