DiagramLinkTemplate = (() => {
    
    const $ = go.GraphObject.make; 
   
    const provideTemplates = () => {

        return $(go.Link,
            $("Shape", { stroke: "green", strokeWidth: 2 }),
            $("Shape", { fill: "green", stroke: null, toArrow: "Standard" })
        );

    }
      
    return{
        provideTemplates
    }
   }
   )()