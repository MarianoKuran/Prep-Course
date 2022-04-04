// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz = Object.entries(objeto)
  return matriz
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let objeto = {};
  for(let i in string){
    objeto[string[i]] = (objeto[string[i]] || 0 ) + 1; 
}
return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let strA = '';
  let strB = '';

  for(let i in s){
      if(s[i] === s[i].toUpperCase()){
          strA += (s[i])
      } else if (s[i] === s[i].toLowerCase()){
          strB += (s[i])
      } 
  } return strA + strB
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  function mirror(parametro){
    let reversed = '';
    for(let i = parametro.length -1; i >= 0; i--){
        reversed += parametro[i]     
    }
    return reversed
}

let arr = str.split(' ');
let fStr = '';

for(let i in arr){
    fStr += mirror(arr[i]) + ' '
}
console.log(fStr)
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let nRev = '';
  let num = numero.toString()

  for(let i = num.length -1; i >= 0; i--){
      nRev += num[i]
  }
  if(nRev === num){
      console.log('Es capicua')
  } else{
      console.log('No es capicua')
  } 
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let str = cadena.toLowerCase()
  let fStr = '';
  for(let i in str){
      if(str[i] == 'a'){
          fStr += str[i].replace('a', '')
      } else if (str[i] === 'b'){
          fStr += str[i].replace('b', '')
      } else if (str[i] === 'c'){
          fStr += str[i].replace('c', '')
      } else{
          fStr += str[i]
      }
  }
  if(fStr.length === 0){
      fStr += 'abc'
      console.log(fStr)
  } else{
      console.log(fStr)
  }
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort((a, b)=>{
    if( a > b ) { return 1 }
    })
  console.log(arr)
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let inter = [];
  for(let i in arreglo1){
    for(let n in arreglo2){
      if(arreglo1[i] == arreglo2[n]){
        inter.push(arreglo1[i])
      }
    }
  }  console.log(inter)  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

