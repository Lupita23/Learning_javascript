//CLASE 17/04/2019
//Metodo map
var number_array = [1,2,3,4,5]// arreglo

var new_number_array = number_array.map(function(element,index,array){//metodo map devuelve un array
    return element *3; 

})

//Aplicando filter devuelve solo los numeros pares dentro de un new_number_array

//var number_array =[1,2,3,4,5]

var new_array = number_array.filter(function(element,index, array){//metodo filter devuelve un nuevo arreglo 
    return element % 2 === 0;//

}) 
console.log(new_number_array)//imprimir resultado
console.log(new_array)


//OBJETOS 

var koder_obj = {
    '0':'Diana',
    '1':'Carlos',
    '2': 'Emma'
}
koder_obj.one;
koder_obj['one'];

//ejercicio 1 de objetos

/*1. Imprimir todos los nombres de los Koders
2. UNa vez teniendo el 1, tambien obtener todos sus hobbies
2.1 Hola soy {koder} y mis hobbies son {hobbie....}
3. Filtrar a los koders que les gusten los videojuegos  */

var koders_array = [
    {
      'nombre': 'David',
      'edad': 22,
      'genero': 'M',
      'hobbies': [
        'Fotografia',
        'Viajar'
      ]
    },
    {
      'nombre': 'Jorge',
      'edad': 23,
      'genero': 'M',
      'hobbies': [
        'Videojuegos',
        'Lectura',
        'Dibujar'
      ]
    },
    {
      'nombre': 'Erick',
      'edad': 25,
      'genero': 'M',
      'hobbies': [
        'Caligrafia',
        'Videojuegos'
      ]
    },
    {
      'nombre': 'Diana',
      'edad': 27,
      'genero': 'F',
      'hobbies': [
        'Hardware',
        'Videojuegos'
      ]
    },
    {
      'nombre': 'Rodo',
      'edad': 32,
      'genero': 'M',
      'hobbies': [
        'Musica',
        'Programacion'
      ]
    }
  ]

  console.table(koders_array)
//tarea 1
  koders_array.forEach(function(element){
      console.log(element.nombre);
  })
//tarea 2
  koders_array.forEach(function(element){
      console.log(element.nombre + ' ' + element.hobbies)
  })
//tarea 2.1
  koders_array.forEach(function(element){
    console.log('Hola soy ' + ' '+ element.nombre + ' ' + 'y mis Hobbies son' + ' ' + element.hobbies)
})

//tarea 3
 var koders_gamers = koders_array.filter(function(koders){
     return koders.hobbies.indexOf('Videojuegos')>=0;
 });

 koders_gamers.forEach(function(element){
    console.log(element.nombre)
});
 

  

  