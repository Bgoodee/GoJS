DiagramNodeTemplate = (() => {
    
    const $ = go.GraphObject.make; 
   
    const provideTemplates = () => {

        return $(go.Node, "Spot",
        {
            resizable: true,
        },
            $(go.Shape, "Square",
                new go.Binding("figure", "Shape"),
                new go.Binding("fill", "Color"),
            ),
             $(go.TextBlock, "text",
             {
                portId: "", cursor: "pointer",
                fromLinkable: true,
                toLinkable: true,
             } ,
                new go.Binding("text", "Text")
            )
        );
    }
      
    return{
        provideTemplates
    }
   }
   )()