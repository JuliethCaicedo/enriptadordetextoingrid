const textArea = document.querySelector (".text-area");
const mensaje = document.querySelector (".mensaje");
const mensajeUno = document.querySelector (".mensajeUno");
const textoUno = document.querySelector (".textoUno");
const mostrarboton = document.querySelector (".btn-copiar"); 
const informacion = document.querySelector (".informacion")
const letras = "abcdefghijklmnñopqrstuvwxyz";

/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function validacion(string){    
    const  textoIngresado = "";    
    for (var i=0; i<string.length; i++)
       if (letras.indexOf(string.charAt(i)) != -1) 
        textoIngresado += string.charAt(i);
    return textoIngresado;    
}


function btnEncriptar(){
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";    
        mensaje.style.backgroundImage = "none";
        mensajeUno.style.display = "none";
        textoUno.style.display = "none"; 
        if (mensaje.style.display === 'none') {
            mostrarboton.style.display = 'none';
          } else {
            mostrarboton.style.display = 'block';
          }  
}


function encriptar (stringEncriptado){
    let matrizCodigo =  [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i< matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo [i][0], matrizCodigo[i][1]);
            }
    }

    return stringEncriptado;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    
}

function desencriptar (stringDesencriptado){
    let matrizCodigo =  [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for ( let i= 0 ;i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;

}

function copiar (){
 let copiarTexto = document.getElementById ("textoCopiado");
 copiarTexto.select();
 copiarTexto.setSelectionRange(0, 99999);
 navigator.clipboard.writeText(copiarTexto.value);
 mensaje.value = "";
}