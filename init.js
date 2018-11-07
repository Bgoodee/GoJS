(() =>{

    window.onload = () => {
        DiagramManager.init();
        PaletteManager.init();
        PropertiesManager.color();
        PropertiesManager.shape();
        PropertiesManager.text();
    }

})();