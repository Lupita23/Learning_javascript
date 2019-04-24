//CLASE 23/04/2019

//REPASO
// WHILE -> imprimir todos los nums de 1 al 100
var x=1

while (x<=100) {
    console.log(x);
    x++;
}

//forEach es una representación de forIn, el for-in es para cualquier tipo de elemento
var numbers_array = [1,2,3,4,5]
numbers_array.forEach(function(element){
    console.log(element);
})

for (element in numbers_array) {
    console.log(element);
}

//ternario == inline if
var x = 2
var y = '2'

var result = (x===y) ? 'sí son iguales' : 'no son iguales'
console.log(result);

// return -> The first function PRINT something on the screen, the second one gives you the data so you can manipulate it
function greeting () {
    console.log('Hello');
}

function returnGreeting (){
    return 'Hello'
} 

var salute = greeting() + 'Diana'
var salute2 = returnGreeting () + 'Diana'

//calculator (exercise 'return')
var a = parseInt(prompt('add a num'))
var b = parseInt(prompt('add another num'))
var operator = prompt('do you want the sum or the remains?')

function sum(a,b) {
    return a+b
}

function minus(a,b) {
    return a-b
}

function calculator (f_number, s_number, operator){
    var result;

    if (operator == 'sum') {
        result = sum(f_number,s_number)
    } else if (operator == 'minus') {
        result = minus(f_number, s_number)
    } else {console.log('No te lo manejo krnal!')}
    
    return result
} 

//Objets/arrays access
var numbers_array = [1,2,3,4,5]

numbers_array[4] //return 5

var obj = {
    'name':'Kodemia'
    'age':30
}

obj.name
obj['name']

obj.age
obj['age']

var test_array = [
    {
        'name':'Kodemia1',
        'age':30,
        'hobbies':[
            'videojuegos',
            'otra cosa',
        ]
    },
    {
        'name':'Kodemia2',
        'age':30,
        'hobbies':[
            'videojuegos',
            'otra cosa',
        ]
    },
    {
        'name':'Kodemia3',
        'age':30,
        'hobbies':[
            'videojuegos',
            'otra cosa',
        ]
},
]

test_array[2]
test_array[2]['age']
test_array[2].age

test_array[2].hobbies[0]
test_array[2]['hobbies'][1]

//object creator function
//with array of objects
var persons_array = [
    {
    'name':'Kodemia',
    'age':30,
    },
]

function Person(name,age) {
    this.name = name
    this.age = age
    this.greeting = function() {
        return 'hello' + this.name
    }
}

var person = new Person(personObj.name,person.Obj.age)

//with array of arrays
var persons_array = [
   [ 
    'Kodemia',
    30,
   ],
]

persons_array.forEach(function(element,index){
    var person = new Person(element[0],element[1])
    console.log(Person.greeting());
})

//************************************************************************************//
//EJERCICIO DE LA CLASE (23/04/2019)
var cars_array= [//arreglo de propiedades de autos
    ["Chevrolet","Rojo","2011","automatico","5089056"],
    ['KIA','Azul','2018','manual','7890000'],
    ['Nissan','Blanco','2005','manual','20846779'],
    ['Fiat','Verde','2018','automatico','3084784'],
    ['BMW','Amarillo','2020','automatico','8980000'],
    ['Volkswagen','Blanco','2017','automatico','2340000'],
    ['Audi','Rosa','2019','manual','10000000'],
    ['Fort','Beige','2017','automatico','17000000']
]

cars_array.forEach(function(element){//recorrer(contar) el arreglo 
    console.log(element);
})

function cars(marca,color,modelo,transmicion,precio){
    this.marca = marca;
    this.color = color;
    this.modelo = modelo;
    this.transmicion = transmicion;
    this.precio = precio;

    this.obtenerMarca = function(){
        return 'La marca del auto es: ' + this.marca
     }
    this.obtenerPrecio = function(){
       return 'el precio: ' + this.precio
    }
    this.obtenerModelo = function(){
        return 'el modelo es: ' + this.modelo
     }
    this.obtenerTransmicion = function(){
        return 'el tipo de transmicion es: ' + this.transmicion
    }
    
}

cars_array.forEach(function(element){
    var car = new cars(element[0],element[1],element[2],element[3],element[4])//instanciar un metodo
    console.log(car.obtenerMarca())
})

cars_array.forEach(function(element){
    var car = new cars(element[0],element[1],element[2],element[3],element[4])
    console.log(car.obtenerModelo())
})
cars_array.forEach(function(element){
    var car = new cars(element[0],element[1],element[2],element[3],element[4])
    console.log(car.obtenerPrecio())
})
cars_array.forEach(function(element){
    var car = new cars(element[0],element[1],element[2],element[3],element[4])
    console.log(car.obtenerTransmicion())
})



