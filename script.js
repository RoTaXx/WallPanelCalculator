function calculatePanels() {
    var panelType = document.getElementById("panelType").value;
    var panelSize = document.getElementById("panelSize").value;
    var squareMeters = document.getElementById("squareMeters").value;
    var panelWidth, panelHeight;

   
    if (panelSize === "120x280") {
        panelWidth = 120; 
        panelHeight = 280; 
    } else if (panelSize === "other-size") {
        //future expansion
        panelWidth = 120;
        panelHeight = 280;
    }

    var panelArea = panelWidth * panelHeight / 10000; // Convert cm^2 to m^2
    var panelsNeeded = Math.ceil(squareMeters / panelArea);

    document.getElementById("result").innerHTML = "You will need " + panelsNeeded + " panels of " + panelType + " (" + panelSize + ").";
}
