// select all planet buttons
var planetButtonElements = document.querySelectorAll(".planet-button");
planetButtonElements.forEach(addPlanetButtonListener);

// for each button, add the event listener
function addPlanetButtonListener(planetButtonElement) {
  planetButtonElement.addEventListener("click", planetButtonClick);
}

// on click, do something with the selected button
function planetButtonClick(event) {
    var clickedButton = event.currentTarget;
    
    // for now, just alert the answer
    // (you'll change this in a minute!)
    var resultElement = document.querySelector(".result");
    resultElement.textContent = "You selected " + clickedButton.textContent;

    planetButtonElements.forEach(updateClickedButtonState);

    clickedButton.classList.add("currently-selected");
}

function updateClickedButtonState(planetButtonElement) {
    planetButtonElement.classList.remove("currently-selected");
}