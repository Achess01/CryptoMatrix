const contenedorMensaje = document.getElementById("Mensaje");
const contenedorLlave = document.getElementById("Llave");
const mensajeEncriptado = document.getElementById("Mensaje_encriptado");
const boton = document.getElementById("Botoncito");
//const listado = {}
var mensaje = new Array();
var textoLlave;
var listado = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
"K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V",
"X", "Y", "Z", ".", ",","Á", "É", "Í", "Ó", "Ú", " ", "1","2","3",
"4","5","6","7","8","9"];
var valores = new Array(4);
var llave = new Array();

boton.addEventListener("click", () => {
    alert(listado.length);
    textoLlave = contenedorLlave.value.split(",");
    for(var x = 0; x < textoLlave.length; x++){
        textoLlave[x] = textoLlave[x].trim();
    }
    var comprobar = comprobarLlave(textoLlave);    
    if(comprobar == 1){
        for(var x = 0; x < llave.length; x++){
            for(var y = 0; y < llave.length; y++){
                
            }   
        }
    }
    else{        
        alert("La matriz de la llave debe de ser cuadrada y separada por comas\n" + 
        "Cuando escriba el último elemento en el último renglón no debe colocar una coma");
    }
    
});

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
        console.log(llave);
        return 1;
    }
    else{
        return 0;
    }
    
}

