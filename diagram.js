function init(){
    var $ = go.GraphObject.make; 
    myDiagram = 
        $(go.Diagram, "DiagramDiv",
            {
                initialContentAlignment: go.Spot.Center,
                "undoManager.isEnabled": true,
                allowDrop: true
            }
        );

    var DiagramNodeDataArray;
    var linkDataArray;
    myDiagram.model = new go.GraphLinksModel(DiagramNodeDataArray,linkDataArray);
    
    myDiagram.nodeTemplate = 
        $(go.Node, "Spot",
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
                fromLinkableDuplicates: false,
                toLinkable: true,
                toLinkableDuplicates: false

             } ,
                new go.Binding("text", "Text")
            )
        );
    
    myDiagram.linkTemplate = 
        $(go.Link,
            $("Shape", { stroke: "green", strokeWidth: 2 }),
            $("Shape", { fill: "green", stroke: null, toArrow: "Standard" })
        );

//---------------------------------------------------------------------------------------
    myPalette= 
        $(go.Palette, "PaletteDiv");

    var PaletteNodeDataArray = [
            {key: "1", Text: "Zielony", Color: "green", Shape: "RoundedRectangle"},
            {key: "2", Text: "Niebieski", Color: "blue", Shape: "Square"},
            {key: "3", Text: "Czerwony", Color: "red", Shape: "Triangle"},
            {key: "4", Text: "Grupa", "isGroup": true, Color: "grey", Shape: "RoundedRectangle"}
        ];

    myPalette.model = new go.Model(PaletteNodeDataArray);   

    myPalette.nodeTemplate = 
        $(go.Node, "Spot",
        $(go.Shape, "Square",
            new go.Binding("figure", "Shape"),
            new go.Binding("fill", "Color"),
        ),
        $(go.TextBlock, "text",
            new go.Binding("text", "Text")
        )
    );

//-----------------------------------------------------------------------------------------

var inspector = new Inspector('InfoDiv', myDiagram,
      {
        properties: {
          "key": { readOnly: true, show: Inspector.showIfPresent },
          "Color": { show: Inspector.showIfPresent, type: 'color' },
          "isGroup": { readOnly: true, show: Inspector.showIfPresent },
        }
    });
}