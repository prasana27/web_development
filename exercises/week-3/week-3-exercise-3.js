// start the counter
// (we'll discuss this properly next week)
var timeElement = document.querySelector(".time");
timeElement.textContent = "0, ";

for (var counter = 1; counter <= 10; counter++) {
    if (counter === 10){
        timeElement.textContent = timeElement.textContent + counter
    }
    else {
    timeElement.textContent = timeElement.textContent + counter + ", ";
    }
}