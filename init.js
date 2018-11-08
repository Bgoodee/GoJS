(() =>{

    window.onload = () => {
        DiagramManager.init();
        PaletteManager.init();
        PropertiesManager.setColor();
        PropertiesManager.setShape();
        PropertiesManager.setText();
        PropertiesManager.readProperties();
    }

})();