
document.write('Hello world')

//obtener body

document.getElementsByTagName('body')

document.getElementsByTagName('body')[0].innerText='Hello world'
//aplicando estilos html
document.getElementsByTagName('body')[0].innerHTML='<h2>Hello world<h2>'

/******************************************************************************************* */
//ACCEDER A LOS ELEMENTOS*/
/*EJERCICIOS 24/04/2019 */


console.log(document.getElementsByTagName('div')[0])
//acceder por clase
console.log(document.getElementsByClassName('even'))
//acceder por etiqueta
console.log(document.getElementsByTagName('li')[3])
//aceder por el padre a ls hijos
console.log(document.querySelectorAll('div>ul>.even'))//obtener por clase
console.log(document.querySelectorAll('div>ul>li'))//obtener todos los li
console.log(document.querySelectorAll('div>ul>li')[3])//obtener el ultimo li del html


//setter and getter
//obtener por id y manipular los elementos
document.getElementById('container')

//editar y anadir estilos
//document.getElementsByClassName('cont')[0].style.backgroundColor='peru'
document.getElementsByTagName('body')[0].style.margin= '0'

document.querySelectorAll('div > ul').forEach(function(element){
    element.style.border='5px'
    element.style.margin= '30px 50px 0px'
    element.style.backgroundColor='yellow'
   
})
//agregar estilos al li
var lis = document.getElementsByTagName('li');
for(element of lis){
    console.log(element)
    element.style.borderStyle = 'solid'
}

//CREAR NODOS

//crear
var node_div = document.createElement('div')//se almacena en una variable y se crea un div
var node = document.createElement('h1')

//crear un nodo de texto

var txt = document.createTextNode('Create world')

//agregar texto en un nodo creado (h1)

node. appendChild(txt)//ingresa un nodo dentro de otro siempre en la posicion final

//como crear y agregar al DOM(HTML)

document.getElementsByTagName('body')[0].appendChild(node)

// crear y agregar un id en el elemento creado 

node.id='title'



//ejemplo


var nodeObj = {
    'tag':'div',
    'children':[
        {
            'tag':'h2',
            'text':'hello'
        },
        {
            'tag':'h2',
            'text':'word'
        }
    ]
 };

//solucion
function createParent(tag){//creacion del padre DIV
    return  document.createElement(tag)
    
}
function createChild(child){
    var element= document.createElement(child.tag)
    var textElement = document.createTextNode(child.text)
    element.appendChild(textElement)
    return element
}
function buildStructure(parent,childrens){
    var parent = createParent(parentTag)
    var childs = createChilds(childrens)
    nodeObj.children.forEach(child => {//recorrer el arreglo
        var childNode = createChild(child)
        parentNode.appendChild(childNode)
    })
    return parentNode
}

function init(){//
    structureNode = buildStructure(nodeObj)
    var bodyNode = document.querySelectorAll('body')[0]
    bodyNode.appendChild(structureNode)
}

init()




 //solucion 2
 console.log(nodeObj.tag);
 console.log(nodeObj.child);
 
 var divObj = document.createElement(nodeObj.tag);
 
 nodeObj.child.forEach(function(elemento){
  console.log(elemento.tag);
    console.log(elemento.text);
 
    var node = document.createElement(elemento.tag)
 //      //crear un nodo de texto
 
    var txt = document.createTextNode(elemento.text)
 //       //agregar texto en un nodo creado (h2)
 
    node.appendChild(txt)//ingresa un nodo dentro de otro siempre en la posicion final
 
    divObj.appendChild(node);
  });
 
 console.log(document.getElementsByTagName('body')[0].appendChild(divObj));