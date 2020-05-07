const contenedorMensaje = document.getElementById("Mensaje");
const contenedorLlave = document.getElementById("Llave");
const mensajeEncriptado = document.getElementById("Mensaje_encriptado");
const boton = document.getElementById("Botoncito");
var mensaje;
var textoLlave;
var valores = new Array();
var llave = new Array();
const listado = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ. ";
boton.addEventListener("click", () => {    
    textoLlave = contenedorLlave.value.split(",");
    for(var x = 0; x < textoLlave.length; x++){
        textoLlave[x] = textoLlave[x].trim();
    }
    var comprobar = comprobarLlave(textoLlave);        
    if(comprobar == 1){
            var det = determinante(llave);
        if(det <= 0 || det == 29){
                alert("Escoja otra llave");
        }
        else{
            mensaje = contenedorMensaje.value;
            /* cantidadE = mensaje.length%llave.length;        
            for(var x = 0; x < cantidadE; x++){
                mensaje += "-";
            }             */
            mensaje = mensaje.toUpperCase();
            filas = mensaje.length/llave.length;
            columnas = llave.length;
            var contador = 0;
            for(var i = 0; i < filas; i++){
                valores[i] = new Array();
                for(var j = 0; j < columnas; j++){
                    valores[i][j] = busqueda(mensaje.charAt(contador));
                    if(isNaN(valores[i][j])){
                        valores[i][j] = 27;
                    }
                    contador++;
                }
                
            }

        }
        mostrarEncriptado(llave, valores);
    }
    else{        
        alert("La matriz de la llave debe de ser cuadrada y separada por comas\n" + 
        "Cuando escriba el último elemento en el último renglón no debe colocar una coma");
    }
    
});

function mostrarEncriptado(k, v){
    var mE = encriptar(k, v);    
    mE = transponer(mE);
    var text = "";
    for(var i = 0; i < mE.length; i++){
        for(var j = 0; j < mE[i].length; j++){
                text += listado[mE[i][j]];                        
        }   
    }
    mensajeEncriptado.innerHTML = '<p>'+text+'</p>';
}

function busqueda(letra){
    var encontrado = false;
    for(var x = 0; x < listado.length; x++){
        if(letra == listado.charAt(x)){
            encontrado = true;
            return x;            
        }
    }
    if(!encontrado){
        return letra.charCodeAt(0);
    }

}
function comprobarLlave(texto){
    var bandera1 = false;
    var bandera2 = true;
    var t = Math.sqrt(texto.length);        
    if(texto.length%t == 0 && texto.length > 3){
        bandera1 = true;
    }

    for(var x = 0; x < texto.length; x++){
        if(isNaN(texto[x])){
            bandera2 = false;
            break;
            
        }
    }

    if(bandera1 && bandera2){
        var conteo = 0;
        for(var x = 0; x < t; x++){
            llave[x] = new Array(t);
            for(var y = 0; y < t; y++){                            
                llave[x][y] = parseInt(texto[conteo]);                
                conteo++;
            }   
        }        
        return 1;
    }
    else{
        return 0;
    }
    
}

