PaletteNodeTemplate = (() => {
    
    const $ = go.GraphObject.make; 
   
    const provideTemplates = () => {

        return $(go.Node, "Spot",
        $(go.Shape, "Square",
            new go.Binding("figure", "Shape"),
            new go.Binding("fill", "Color"),
        ),
        $(go.TextBlock, "text",
            new go.Binding("text", "Text")
        )
    );
    }
      
    return{
        provideTemplates
    }
   }
   )()