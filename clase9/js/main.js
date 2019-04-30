//CLASE 26/04/2019



var kodemia = {
    'tag':'div',
    'id': 'koders_wrapper',
    'koders':[
      {
        'tag':'div',
        'id': 1,
        'name':{
          'tag': 'p',
          'text':'David'
        },
        'age': {
          'tag': 'p',
          'text': 22
        },
        'gender': {
          'tag': 'p',
          'text':'H'
        }
      },
      {
        'tag':'div',
        'id': 2,
        'name':{
          'tag': 'p',
          'text':'Jorge'
        },
        'age': {
          'tag': 'p',
          'text': 23
        },
        'gender': {
          'tag': 'p',
          'text':'H'
        }
      }
    ]
  }
  
  function createNode(tag) {// crea el primer div
    return document.createElement(tag)
  }
  
  function createNodeText(text) {
    return document.createTextNode(text)//crear texto
  }
  
  function createComplexNode(tag, text) {
    var node = createNode(tag)
    var textNode = createNodeText(text)
    node.appendChild(textNode)
    return node
  }
  
  function buildStructure(obj) {
    var structure = createNode(obj.tag)
    structure.id = obj.id
    obj.koders.forEach(function(koder) {
      var child = buildChild(koder)
      structure.appendChild(child)
    })
    return structure
  }
  
  function buildChild(koder) {//se contruye el hijo
    var child = createNode(koder.tag)
    child.id = koder.id//ce
    var nameNode = createComplexNode(koder.name.tag, koder.name.text)//acceso a las propiedades
    var ageNode = createComplexNode(koder.age.tag, koder.age.text)
    var genderNode = createComplexNode(koder.gender.tag, koder.gender.text)
    child.appendChild(nameNode)
    child.appendChild(ageNode)
    child.appendChild(genderNode)
    return child
  }
  
  function addElement(obj) {
    var parent = document.getElementById(kodemia.id)//contenedor
    var newNode = buildChild(obj)//creacion del nuevo que representa a un hijo
    parent.appendChild(newNode)//apenda al padre
  }
  
  function editElement(id, obj) {
    var children = document.getElementById(id).children
    children[0].innerText = obj.name.text
    children[1].innerText = obj.age.text
    children[2].innerText = obj.gender.text
  }
  
  function removeElement(id) {
    var parent = document.getElementById(kodemia.id)//se obtiene el padre
    var child = document.getElementById(id)//se obtiene el hijo
    parent.removeChild(child)
  }
  
  function init() {
    var structureNode = buildStructure(kodemia)
    var bodyNode = document.querySelectorAll('body')[0]
    bodyNode.appendChild(structureNode)
  }
  
  init()
  