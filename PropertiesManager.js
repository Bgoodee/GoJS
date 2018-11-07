PropertiesManager = (() => {
    
    const text = () => {
        const el = document.getElementById("text");
        el.addEventListener("blur", function(){ 
            const node = myDiagram.selection.first();
            if(node!=null){
            myDiagram.startTransaction("color");
            myDiagram.model.setDataProperty(myDiagram.selection.first().data, "Text", el.value);
            myDiagram.commitTransaction("color");
            }
            else
                return;
        })
    } 

    const shape = () => {
        const el = document.getElementById("shape");
        el.addEventListener("blur", function(){ 
            const node = myDiagram.selection.first();
            if(node!=null){
            myDiagram.startTransaction("color");
            myDiagram.model.setDataProperty(node.data, "Shape", el.value);
            myDiagram.commitTransaction("color");
            }
            else
                return;
        })
    } 

    const color = () => {
        const el = document.getElementById("color");
        el.addEventListener("blur", function(){ 
            const node = myDiagram.selection.first();
            if(node!=null){
            myDiagram.startTransaction("color");
            myDiagram.model.setDataProperty(node.data, "Color", el.value);
            myDiagram.commitTransaction("color");
            }
            else
                return;
        })
    } 

    return{
        color,
        text,
        shape
    }

})()