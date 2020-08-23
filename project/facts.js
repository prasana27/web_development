var facts = [
    {
        title: "Inside of planet Mars",
        image: "img/marsCartoon.png",
        info: "Unlike Earth, the mantle of Mars is made up of soft rocks. Mars is made up of iron, magnesium, oxygen, and silicon.",
    }
];


var fact1 = facts[0];
var factTitle = document.createElement("h2");
var factInfo = document.createElement("p");
var factImage = document.createElement("img");

factTitle.textContent = fact1.title;
factInfo.textContent = fact1.info;
factImage.src = fact1.image;

console.log(factImage.src);

var factElement = document.querySelector(".image");
factElement.appendChild(factImage);

var factElement = document.querySelector(".title");
factElement.appendChild(factTitle);

var factElement = document.querySelector(".info");
factElement.appendChild(factInfo);

// anime({
//     targets: ['.title','.info'],
//     translateX: 250,
//     duration: 1500,
//     translateX: -250
//   });


