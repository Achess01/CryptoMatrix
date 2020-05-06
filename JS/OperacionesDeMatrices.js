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
                v = Math.abs(v)%43;            
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
        for(var y = 0; y < matriz[x].length; y++){
            matrizFinal[x][y] = matriz[y][x];
        }
    }
    return matrizFinal;
}

function determinante(matriz){
    var det = 0;     
    if(!isNaN(matriz)){
        det = matriz;
    }
    else if(matriz.length == 2){
        det = matriz[0][0]*matriz[1][1] - matriz[0][1]*matriz[1][0];
    }
    else if(matriz.length == 3){
        det = matriz[0][0]*matriz[1][1]*matriz[2][2]+matriz[0][1]*matriz[1][2]*matriz[2][0]
        +matriz[0][2]*matriz[1][0]*matriz[2][1]-matriz[0][2]*matriz[1][1]*matriz[2][0]
        -matriz[0][0]*matriz[1][2]*matriz[2][1]-matriz[0][1]*matriz[1][0]*matriz[2][2];
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
    var fila = new Array();
    var d = 0;
    //Crear arreglo para guardar datos y al final agregar al arreglo nMatriz
    var confactor = 0;
    if(matriz.length > 2){        
            for(var i = 0; i < matriz.length; i++){                  
                cC = 0;                
                for(var j = 0; j < matriz.length; j++){                                        
                    if(i != posI && j != posJ){                                 
                        fila[cC]= matriz[i][j];                        
                        cC++;
                        if(cC == nMatriz.length){                                                        
                            cC = 0;
                            nMatriz[cF] = fila;
                            fila = new Array();
                            cF++;
                        }                        
                    }                    
                }
            }                            
            confactor = Math.pow(-1, 2 + posI + posJ)*determinante(nMatriz)            
    }
    else{
        for(var i = 0; i < matriz.length; i++){                                            
            for(var j = 0; j < matriz[0].length; j++){
                if(i != posI && j != posJ){
                 d = matriz[i][j];                         
                }                    
            }
        }             
        confactor = Math.pow(-1, 2 + posI + posJ)*d;
    }        
            
            return confactor;
}

function adjunta(matriz){
    var matrizFinal = new Array();
    for(var i = 0; i < matriz.length; i++){
        matrizFinal[i] = new Array();
        for(var j = 0; j < matriz[i].length; j++){
           matrizFinal[i][j] = cofactor(matriz, i, j);
        }   
    }
    matrizFinal = transponer(matrizFinal);
    return matrizFinal;
}

function inversa(matriz){
    var det = Math.abs(determinante(matriz));
    var x = 1;
    while((det*x-1)%43 != 0){
        x++;
    }
    console.log(x);
    var mAdjunta = adjunta(matriz);
    var mInversa = new Array();
    for(var i = 0; i < matriz.length; i++){        
        mInversa[i] = new Array();
        for(var j = 0; j < matriz[i].length; j++){
           mInversa[i][j] = mAdjunta[i][j]*x;
        }   
    }
    return mInversa;
}