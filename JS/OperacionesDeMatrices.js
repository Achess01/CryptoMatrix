/* 
var m1 = new Array();
m1[0] = [3, 6, 18];
m1[1] = [6, 3, 9];
var m2 = new Array();
m2[0] = [6, 2];
m2[1] = [10, 4];
m2[2] = [-6, 0];

console.log(multiplicar(m2, m1));
 

var m2 = new Array();
m2[0] = [4, -1, 8];
m2[1] = [2, 5, 3];
m2[2] = [1, 2, 11];
var m1 = new Array();
m1[0] = [3, 6];
m1[1] = [6, 3];

console.log(determinante(m2));
*/
function multiplicar(matriz1, matriz2){
    var matrizFinal = new Array();    
    for(var x = 0; x < matriz1.length; x++){                
        matrizFinal[x] = new Array();
        for(z = 0; z < matriz2[0].length; z++){
            var v = 0;
            for(y = 0; y < matriz1[0].length; y++){
                if(!isNaN(matriz1[x][y]) && !isNaN(matriz2[y][z])){
                v += matriz1[x][y]*matriz2[y][z];   
                v = v%43;            
                }
            }            
            matrizFinal[x][z] = v;
        }                   
    }
    return matrizFinal;
}



function transponer(matriz){
    var matrizFinal = new Array();
    for(var x = 0; x < matriz.length; x++){
        matrizFinal[x] = new Array();
        for(var y = 0; y = matriz[x].length; y++){
            matriz[x][y] = matriz[y][x];
        }
    }
}

function determinante(matriz){
    var det = 0;     
    if(matriz.length == 1)   {
        det = matriz[0][0];
    }
    if(matriz.length == 2){
        det = matriz[0][0]*matriz[1][1] - matriz[0][1]*matriz[1][0];
    }
    else{
        for(var j = 0; j < matriz[0].length; j++){            
            det += matriz[0][j]*cofactor(matriz, 0, j)
        }
    }
    return det;   
}

function cofactor(matriz, posI, posJ){
    var cF = 0;
    var cC = 0;
    var nMatriz = new Array(matriz.length - 1);
    var confactor = 0;
    
            for(var i = 0; i < matriz.length; i++){                                
                    nMatriz[cF] = new Array(matriz[i].length - 1);
                for(var j = 0; j < matriz[0].length; j++){
                    if(!(i == posI) && !(j == posJ)){
                        nMatriz[cF][cC] = matriz[i][j];                       
                        cC++;
                        if(cC == nMatriz[cF].length){
                            cC = 0;
                            cF++;
                        }                        
                    }                    
                }
            }            
            confactor = Math.pow(-1, 2 + posI + posJ)*determinante(nMatriz)
            return confactor;
}