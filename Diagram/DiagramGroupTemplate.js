DiagramGroupTemplate = (() => {
    
    const $ = go.GraphObject.make; 
   
    const provideTemplates = () => {

        return $(go.Group, "Spot",
        {
            resizable: true,
        },
            $(go.Shape, "Square",
                new go.Binding("figure", "Shape"),
                new go.Binding("fill", "Color"),
            ),
        );

    }
      
    return{
        provideTemplates
    }
   }
   )()