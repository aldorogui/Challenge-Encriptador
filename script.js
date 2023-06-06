const entrada=document.querySelector(".entrada");
const mensaje=document.querySelector(".mensaje");
const btncopy=document.getElementById('copy')
var texto = document.querySelector(".entrada").value

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function encriptar(stringEncriptado){
    let matrixCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptado=stringEncriptado.toLowerCase()

    for(let i=0;i<matrixCodigo.length;i++){
        if(stringEncriptado.includes(matrixCodigo[i][0])){
            stringEncriptado=stringEncriptado.replaceAll(matrixCodigo[i][0],matrixCodigo[i][1])
        }
    }
    return stringEncriptado
}

function desencriptar(stringDesencriptado){
    let matrixCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDesencriptado=stringDesencriptado.toLowerCase()

    for(let i=0;i<matrixCodigo.length;i++){
        if(stringDesencriptado.includes(matrixCodigo[i][1])){
            stringDesencriptado=stringDesencriptado.replaceAll(matrixCodigo[i][1],matrixCodigo[i][0])
        }
    }
    return stringDesencriptado
}

function vaciar (){
    if (texto==""){
        mensaje.style.backgroundImage="url('Muñecu.png')"
        btncopy.style.visibility="hidden";
        
    }
    else{
        mensaje.style.backgroundImage="none"
        btncopy.style.visibility="visible";
        btncopy.style.marginTop= "512.8px";
        btncopy.style.position= "flex";


        
    }
}

function btnEncriptar() {
    const textoEncriptado=encriptar(entrada.value)
    texto= document.querySelector(".entrada").value
    mensaje.value=textoEncriptado
    entrada.value="";
    vaciar();

}

function btnDesencriptar() {
    const textoDesencriptado=desencriptar(entrada.value)
    texto= document.querySelector(".entrada").value
    mensaje.value=textoDesencriptado
    entrada.value="";
    vaciar();

}

function btnCopiar() {
    const textoCopiado= mensaje.value
    navigator.clipboard.writeText(textoCopiado)
    entrada.value="";
    mensaje.style.backgroundImage="none"
    

}

