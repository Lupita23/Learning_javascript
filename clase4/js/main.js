/*clase 16/04/2019*/
//calcular litros de gasolina

/*Dolares -> MXN (1 parametro)
MXN -> Litros de gasolina (1 parametro)

return*/

function toMXN(USD){
    return toGasolinaLitros(USD * 18.88)
}
function toGasolinaLitros(MXN){//se ejecuta de aadentro hacia afuera
    return MXN/19.37
}
console.log(toMXN(10))

//INVERTIR UNA PALABRA
/*input -> '30920'
output -> '02903'*/

/*1. 'HOLA' -> ['H','O','L','A']
 2.['H','O','L','A'] -> ['a','l','o','h']*/
function palabra(word){
    //var num = '30920';
return word.split('').reverse().join('.')

}
palabra('hola');

//convertir elemento a mayusculas
/*input -> 'holi a todos'
output ->'Holi A Todos'*/


function capitalize(word){
    return word.split(' ').map(function(element){
        var wordArray = element.split('')
        wordArray[0] = wordArray[0].toUpperCase()
        return wordArray.join('')
    }).join('')

   
}
 //Metodo filter()
var numbers_array = [1,2,3,4,5,6,7,8,9,10]
var even_array = numbers_array.filter(function(element,index,array){
 return element % 2 === 0 //operacion comparativa, regresa booleanos
})