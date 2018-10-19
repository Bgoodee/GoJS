PaletteManager = (() => {
    
    const $ = go.GraphObject.make; 
   
    const init = () => {
        const myPalette = $(go.Palette, "PaletteDiv");

    var PaletteNodeDataArray = [
        {key: "1", Text: "Zielony", Color: "green", Shape: "RoundedRectangle"},
        {key: "2", Text: "Niebieski", Color: "blue", Shape: "Square"},
        {key: "3", Text: "Czerwony", Color: "red", Shape: "Triangle"},
        {key: "4", Text: "Grupa", "isGroup": true, Color: "grey", Shape: "RoundedRectangle"}
    ];

    myPalette.nodeTemplate = PaletteNodeTemplate.provideTemplates();
    myPalette.model = new go.Model(PaletteNodeDataArray);   
}

    return{
        init
    }
})()
   