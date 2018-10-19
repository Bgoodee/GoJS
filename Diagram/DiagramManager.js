DiagramManager = (() => {
    
    const $ = go.GraphObject.make; 

    const init = () => {
        const myDiagram = $(go.Diagram, "DiagramDiv",
        {
            initialContentAlignment: go.Spot.Center,
            "undoManager.isEnabled": true,
            allowDrop: true
        }
    ); 

    myDiagram.nodeTemplate = DiagramNodeTemplate.provideTemplates();
    myDiagram.linkTemplate = DiagramLinkTemplate.provideTemplates();
    myDiagram.groupTemplate = DiagramGroupTemplate.provideTemplates();
    myDiagram.model = new go.GraphLinksModel();
 }
   
    return{
        init
    }
})()


