PropertiesManager = (() => {

    const readProperties = () => {
        node = myDiagram.selection.first();
        myDiagram.addDiagramListener("ChangedSelection",
      function() {
            node = myDiagram.selection.first();
            if(node!=null){
                document.getElementById("text").value = node.data.Text;
                document.getElementById("shape").value = node.data.Shape;
                document.getElementById("color").value = node.data.Color;
            }
            else
            {
            myDiagram.addDiagramListener("BackgroundSingleClicked",
                function() {
                    document.getElementById("text").value = "";
                    document.getElementById("shape").value = "";
                    document.getElementById("color").value = "";
                })
            }
      });       
    }
    
    const setText = () => {
        const el = document.getElementById("text");
        el.addEventListener("blur", function(){ 
            const node = myDiagram.selection.first();
            if(node!=null){
                myDiagram.startTransaction("color");
                myDiagram.model.setDataProperty(node.data, "Text", el.value);
                myDiagram.commitTransaction("color");
            }
            else
                return;
        })
    } 

    const setShape = () => {
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

    const setColor = () => {
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
        setColor,
        setText,
        setShape,
        readProperties
    }

})()