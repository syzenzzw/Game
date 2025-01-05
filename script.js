function Verificacao()
{
    const btnEnviar = document.getElementById('btnEnviar');
    const lblPalavra = document.getElementById('lblPalavra');
    const lblDica = document.getElementById('lblDica');
    const Palavra = document.getElementById('Palavra');
    const Dica = document.getElementById('Dica');
    const btnIniciar = document.getElementById('btnIniciar');
   

    if (Palavra.value.trim() === '' || Dica.value.trim() === '') {
        alert('Digite uma palavra e uma dica');
        btnIniciar.style.display = 'none';
    }
    else{
        btnIniciar.style.display = 'inline';
        btnEnviar.style.display = 'none';
        lblPalavra.style.display = 'none';
        lblDica.style.display = 'none';
        Palavra.style.display = 'none';
        Dica.style.display = 'none';
    }
}

function JogoIniciado(){
    const lblAdvPalav = document.getElementById('lblAdvPalav').style.display = 'inline';
    const lblAdvLetra = document.getElementById('lblAdvLetra').style.display = 'inline';
    const advPalavra = document.getElementById('advPalavra').style.display = 'inline';
    const advLetra = document.getElementById('advLetra').style.display = 'inline';
    const PalavraJogo = document.getElementById('Palavra').value;
    const DicaJogo = document.getElementById('Dica').value;
    const btnIniciar = document.getElementById('btnIniciar').style.display = 'none';
    const btnAdvPalavra = document.getElementById('btnAdvPalavra').style.display = 'inline';
    const btnAdvLetra = document.getElementById('btnAdvLetra').style.display = 'inline';

    const advPalavraValue = advPalavra.value;
    const advLetraValue = advLetra.value;
    
    function SepararPalavra(){
        const Letras = PalavraJogo.split('');
        let Guardar = [];
        for (let i = 0; i < Letras.length; i++) {
            Guardar.push('_ ');
        }
        document.getElementById('palavraOculta').innerHTML = Guardar.join(' ');
    }
    SepararPalavra(); 
    
    palavraOculta = Array(PalavraJogo.length).fill('_')
    
}

let acertos = 0;
let erros = 0;

function TratamentosAcertosErrosLetra(){
    const PalavraJogo = document.getElementById('Palavra').value;
    const advLetra = document.getElementById('advLetra').value;
    const letras = PalavraJogo.split('');



    if (letras.includes(advLetra)) {
        acertos += 1;
        for (let i = 0; i < letras.length; i++) {
             if (letras[i] === advLetra) {
                palavraOculta[i] = advLetra;
             }
        }
    }
    else{
        erros += 1;
        console.log(erros)
    }

    if (acertos == letras.length) {
        console.log('acabou o jogo');
    }

    document.getElementById('palavraOculta').innerHTML = palavraOculta.join(' ');
} 