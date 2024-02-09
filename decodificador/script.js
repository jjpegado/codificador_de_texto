
let msgCriptografada;
let msgSCriptografada;
let texto;

function criptografar(){

    pegartexto();

    if (texto == null || texto =='') {
        ocultarResultado();
        voltarConsoleInicial();

    } else {

        ocultarConsoleInicial();
        voltarResultado();

        msgCriptografada = texto.replace(/e/g, "enter")
                                .replace(/i/g, "imes")
                                .replace(/a/g, "ai")                          
                                .replace(/o/g, "ober")
                                .replace(/u/g, "ufat");

        
        
        document.getElementById('output').innerHTML = '<textarea readonly id ="input-texto">' + msgCriptografada + '</textarea> ' +
            '<button claas="btn_copiar" id="copiar" onclick="copiar()">Copiar</button>'
        
        limparTexto();
    }
}

function descriptografar(){

    pegartexto();
    
    if (texto == null || texto =='') {

        ocultarResultado();
        voltarConsoleInicial();

    } else { 
        
        ocultarConsoleInicial();
        voltarResultado();

        msgCriptografada = texto.replace(/ai/g, "a")
                                .replace(/enter/g, "e")
                                .replace(/imes/g, "i")
                                .replace(/ober/g, "o")
                                .replace(/ufat/g, "u");

        
        
        document.getElementById('output').innerHTML = '<textarea class="cript_resultado"readonly id ="input-texto" >' + msgCriptografada + '</textarea> ' +
            '<button claas="btn_copiar" id="copiar" onclick="copiar()">Copiar</button>' 
        
        limparTexto();
    }   
}

function ocultarConsoleInicial() {
    document.getElementById('msgConsoleInicio').style.display='none';
}

function voltarConsoleInicial(){
    document.getElementById('msgConsoleInicio').style.display='block';

}

function ocultarResultado(){
    document.getElementById('output').style.display='none';
}

function voltarResultado(){
    document.getElementById('output').style.display='block';
}

function copiar(){
    let textoCopiado = document.getElementById('input-texto');
    textoCopiado.select();
    document.execCommand('copy');
    alert('Texto copiado');
}

function pegartexto(){
    texto =  document.querySelector('textarea').value;
    return texto;
}

function limparTexto(){
    texto = '';
}