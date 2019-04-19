//CLASE 18/04/2019
// Aunmentar la edad de cada koder, array del ejercicio del 17/04/2019
koders_array.forEach(function(element, index, array) {
    element.edad = element.edad + 1
  })

//EJEMPLO DE METODO MAP
  var number_array = [1,2,3,4,5]

  var new_number_array = number_array.map(function(element) {
    if (element % 2 === 0) {
      return element * 2
    } else {
      return element
    }
  })

//EJERCICIO 1

var  car_objet={
    'color':{
        'galaxi': ''

    }
}