PaletteManager = (() => {
    
    const $ = go.GraphObject.make; 
   
    const init = () => {
        const myPalette = $(go.Palette, "PaletteDiv");

    var PaletteNodeDataArray = [
        {key: "1", Text: "Green", Color: "Green", Shape: "RoundedRectangle"},
        {key: "2", Text: "Blue", Color: "Blue", Shape: "Square"},
        {key: "3", Text: "Red", Color: "Red", Shape: "Triangle"},
        {key: "4", Text: "Group", "isGroup": true, Color: "Grey", Shape: "RoundedRectangle"}
    ];

    myPalette.nodeTemplate = PaletteNodeTemplate.provideTemplates();
    myPalette.model = new go.Model(PaletteNodeDataArray);   
}

    return{
        init
    }
})()
   