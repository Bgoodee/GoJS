let myDiagram;
DiagramManager = (() => {
    
    const $ = go.GraphObject.make; 
    const init = () => {
        myDiagram = $(go.Diagram, "DiagramDiv",
        {
            initialContentAlignment: go.Spot.Center,
            "undoManager.isEnabled": true,
            allowDrop: true,
            mouseDrop: function(e) { finishDrop(e, null); },
        }
    ); 

    myDiagram.toolManager.linkingTool.linkValidation = differentShape;
    myDiagram.toolManager.relinkingTool.linkValidation = differentShape;
    myDiagram.nodeTemplate = DiagramNodeTemplate.provideTemplates();
    myDiagram.linkTemplate = DiagramLinkTemplate.provideTemplates();
    myDiagram.groupTemplate = DiagramGroupTemplate.provideTemplates();
    myDiagram.model = new go.GraphLinksModel();

    }

   const finishDrop = (e, grp) => {
     const ok = (grp != null
            ? grp.addMembers(grp.diagram.selection, true)
            : e.diagram.commandHandler.addTopLevelParts(e.diagram.selection, true));
    if (!ok) e.diagram.currentTool.doCancel();
    }

    const differentShape = (fromnode, fromport, tonode, toport) => {
        return fromnode.data.Shape != tonode.data.Shape;
    }

    return{
        init,
        finishDrop,
        differentShape
    }
})()


