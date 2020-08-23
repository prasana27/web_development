var planetElements = document.querySelectorAll(".planet");

// for (var counter = 0; counter < planetElements.length; counter++) {
//     var planetElement = planetElements[counter];
//     planetElement.classList.add("blue");
// }

function updatePlanet(planetElements){
    planetElements.classList.add("blue");
}

planetElements.forEach(updatePlanet);