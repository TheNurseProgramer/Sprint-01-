 function encriptar (texto){
    if (texto == ""){
        alerta()
    }else {
        document.getElementById("sin_texto").style.display = "none"
        var new_texto = "";
        //? se cambia de string a array
        var aux = Array.from(texto)
        //? se recorre el arreglo hasta encontrar el caracter especicifico y se sustituye
        for (let i = 0; i < aux.length; i++) {
            switch (aux [i]){
                case "a":
                    aux [i]= "ai"
                    break;
                case "e":
                    aux [i]= "enter"
                    break;
                case "i":
                    aux [i]= "imes"
                    break;
                case "o":
                    aux [i]= "ober"
                    break;
                case "u":
                    aux [i]= "ufat"
                    break;
                default:
                    break;
            }
            new_texto += aux[i]
        }
        document.getElementById("texto_mostrar").innerText = new_texto
        document.getElementById('texto_encriptar').value = ""
        document.getElementById("con_texto").style.visibility = "visible"
    }
   
 }

function desencriptar (texto){
    if (texto == ""){
        alerta()
    }else {
    var aux = Array.from(texto)
    new_texto = "";
    //? se recorre el arreglo y se condiciona a encontrar la clave del encriptador, si es asi se eliminan los caracteres que la conforman
    for (let i = 0; i < aux.length; i++) {
        switch (aux [i]){
            case "a":
                if (aux[i]+aux[i+1]== "ai"){
                    aux.splice(i+1,1)
                    break;
                }
                break;
            case "e":
                if (aux[i]+aux[i+1]+aux[i+2]+aux[i+3]+aux[i+4]== "enter"){
                    aux.splice(i+1,4)
                    break;
                }
                break;
            case "i":
                if (aux[i]+aux[i+1]+aux[i+2]+aux[i+3]== "imes"){
                    aux.splice(i+1,3)
                    break;
                }
                break;
            case "o":
                if (aux[i]+aux[i+1]+aux[i+2]+aux[i+3]== "ober"){
                    aux.splice(i+1,3)
                    break
                }
                break;
            case "u":
                if (aux[i]+aux[i+1]+aux[i+2]+aux[i+3]== "ufat"){
                    aux.splice(i+1,3)
                    break
                }
                break;
            default:
                break;
        }
        new_texto += aux[i]
        }
    alert ("El mensaje es: \n"+new_texto)
    document.getElementById('texto_encriptar').value = ""
    }
}
function copiar_texto (texto){
    navigator.clipboard.writeText(texto)
}
function alerta (){
    alert ("Asegurese de haber ingresado el texto!")
}
console.log (document.getElementById("sin_texto"))