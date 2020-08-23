// add a listener to buttons
var planetButtonElements = document.querySelectorAll(".planet-button");
planetButtonElements.forEach(addPlanetButtonListener);

// add the event listener for each button
function addPlanetButtonListener(planetButtonElements) {
    planetButtonElements.addEventListener("click", planetButtonClick);
}

// when a button has been clicked, show its content
function planetButtonClick(event) {
    var clickedButton = event.currentTarget;

    // the rest of the code will live here...
    var detailsElementCssSelector = ".planet-details-" + clickedButton.textContent;
    var detailsElement = document.querySelector(detailsElementCssSelector);


    var planetDetailElements = document.querySelectorAll(".planet-details");
    planetDetailElements.forEach(updatePlanetDetailState);

    planetButtonElements.forEach(updateButton);

    

    detailsElement.classList.add("currently-selected-planet");
    clickedButton.classList.add("currently-selected-button");

    updateLog(clickedButton.textContent);
    
}

function updatePlanetDetailState(planetDetailElements) {
    planetDetailElements.classList.remove("currently-selected-planet");
}

function updateButton(clickedButton){
    clickedButton.classList.remove("currently-selected-button"); 
}

function updateLog(planetName) {
    var timeNow = new Date().toUTCString();

    var newListElement = document.createElement("li");
    newListElement.classList.add("log-item");
    newListElement.textContent = timeNow + ": " + planetName + " clicked";

    var logElement = document.querySelector(".log");
    logElement.appendChild(newListElement);
}

