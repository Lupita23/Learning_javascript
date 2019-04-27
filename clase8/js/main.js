//CLASE 25/04/2019


var nodeObj = {
    'tag':'div',
    'children':[
        {
            'tag':'ul',
            'grandChild':[
                {
                    'tag':'li'

                },
                {
                    'tag':'li'

                }
                ,{
                    'tag':'li'

                }

            ]
        },
        {
            'tag':'ul',
            'grandChild':[
                {
                    'tag':'li'

                },
                {
                    'tag':'li'

                }
                ,{
                    'tag':'li'

                }

            ]
        }
    ]
 };

console.log(nodeObj)

function createParent(tag){//creacion del padre DIV
    return  document.createElement(tag)
    
}
function createChild(child){//creacion del hijo
    var element= document.createElement(child.tag)
    return element
}
function grandChild(grandPaChild){//crear nieto
    var element= document.createElement(grandPaChild.tag)
    return element
}

function buildStructure(nodeObj){
    var parent = createParent(nodeObj.tag)
    nodeObj.children.forEach(child => {//recorrer el arreglo
        
        var childNode = createChild(child)
        child.grandChild.forEach(function(grandChild){
           var grandChildNode = createChild(grandChild) 
           childNode.appendChild(grandChildNode)
        })
        parent.appendChild(childNode)
    })
    return parent
}

function init(){//
    structureNode = buildStructure(nodeObj)
    var bodyNode = document.querySelectorAll('body')[0]
    bodyNode.appendChild(structureNode)
}

init()






