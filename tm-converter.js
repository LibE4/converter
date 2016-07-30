function toCelsius (tmF) {
	var tmC = (tmF - 32) * 5 / 9;
	return tmC;
}

function toFahrenheit (tmC) {
	var tmF = tmC * 9 / 5 + 32;
	return tmF;
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
	console.log("event", clickEvent);
	//get radio button value
	var radios = document.getElementsByName("convert-to");
	var divElement = document.getElementById("converted-tm");
	var newDiv = document.createElement("div");
	var convertedTm;
	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			if (radios[i].value === "celsius") {
				convertedTm = toCelsius(numberToConvert);
				console.log(convertedTm);
				if (convertedTm > 32) {
					convertedTm = convertedTm.toString().fontcolor("red");
				}
				else if (convertedTm >= 0) {
					convertedTm = convertedTm.toString().fontcolor("green");
				}
				else {
					convertedTm = convertedTm.toString().fontcolor("blue");
				}
				newDiv.innerHTML = convertedTm;
			}
			else {
				convertedTm = toFahrenheit(numberToConvert);
				console.log(convertedTm);
				if (convertedTm > 90) {
					convertedTm = convertedTm.toString().fontcolor("red");
				}
				else if (convertedTm >= 32) {
					convertedTm = convertedTm.toString().fontcolor("green");
				}
				else {
					convertedTm = convertedTm.toString().fontcolor("blue");
				}
				newDiv.innerHTML = convertedTm;
			}
		}
		divElement.appendChild(newDiv);
	}
}

// Get a reference to element in the DOM and set number to convert
var buttonConvert = document.getElementById("converter");
var buttonClear = document.getElementById("clearinputbox");
var textElement = document.getElementById("orig-tm");
var numberToConvert;


// Assign a function to be executed when the button is clicked
buttonConvert.addEventListener("click", determineConverter);
buttonClear.addEventListener("click", clearTextarea);

//handles text enter event
textElement.addEventListener("keyup", function(event) {
    event.preventDefault();
	numberToConvert = parseInt(textElement.value);
    if (event.keyCode == 13) {
        determineConverter(event);
    }
})

function clearTextarea() {
	textElement.value = "";
}
