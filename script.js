 function encriptar (texto){
    var new_texto = "";
    var aux = Array.from(texto)
    for (let i = 0; i < aux.length; i++) {
        //console.log(aux[i])
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
 }
function desencriptar (texto){
    var aux = Array.from(texto)
    new_texto = "";
    for (let i = 0; i < aux.length; i++) {
        //console.log(aux[i])
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
