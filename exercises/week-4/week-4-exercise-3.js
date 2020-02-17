var mercuryButton = document.querySelector(".mercury");
var venusButton = document.querySelector(".venus");
var earthButton = document.querySelector(".earth");
var clickCounter = 0;


function selectPlanet(planetName) {
    var resultElement = document.querySelector(".result");
    resultElement.textContent = planetName;
    increment();
}

function increment(){
    clickCounter = clickCounter + 1;
    var clickElement = document.querySelector(".click-count");
    clickElement.textContent = clickCounter;
}

mercuryButton.addEventListener("click", selectPlanet("Mercury"));
venusButton.addEventListener("click", selectPlanet("Venus"));
earthButton.addEventListener("click", selectPlanet("Earth"));


