function addColourToPlanet(planetSelector, planetName, colour) {
    console.log("You have called addColourToPlanet() with the following parameters");
    console.log(planetSelector, planetName, colour);
    
    // this is where you need to write your JavaScript!
    var planetElement = document.querySelector(planetSelector);
    planetElement.textContent = planetName;
    planetElement.classList.add(colour);
}

addColourToPlanet(".mercury", "Mercury", "orange");
addColourToPlanet(".venus", "Venus", "green");
addColourToPlanet(".earth", "Earth", "blue");