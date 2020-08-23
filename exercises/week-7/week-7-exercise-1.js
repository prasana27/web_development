// create our data
var planets = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Nepture',
    'Uranus',
];

// create the function to add the planet to the page
function addPlanetToPage(planetName) {
    var planetElement = document.createElement("li");
    planetElement.textContent = planetName;
    planetElement.classList.add("planet");

    var planetListElement = document.querySelector(".planets");
    planetListElement.appendChild(planetElement);
}

// add all planets
planets.forEach(addPlanetToPage);

var planetCountElement = document.querySelector(".planet-count");
planetCountElement.textContent = planets.length;