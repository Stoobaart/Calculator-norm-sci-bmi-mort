function normalCalc(number1, operator, number2) {
	var number1 = parseInt(prompt ("Enter your first number"));
	var operator = prompt ("Enter your operator");
	var number2 = parseInt(prompt ("Enter your second number"));
	if (operator === "+") {
		return alert(number1 + number2);
	} else if (operator === "-") {
		return alert(number1 - number2);
	} else if (operator === "*") {
		return alert(number1 * number2);
	} else if (operator === "/") {
		return alert(number1 / number2);
	} else {
		console.log("Please enter a recogniseable calculation");
	}
	var answered = true;
}

function scienceCalc (number1, operator) {
	var operator = prompt("square root or power?");
	var number1 = parseInt(prompt("Enter the number you want to use"));
	if (operator === "square root" || "square" || "squirt" || "√") {
		return alert(Math.sqrt(number1));
	} else if (operator === "power" || "^") {
		return alert(Math.pow(number1));
	} else {
		alert("I am confused");
	}
	var answered = true;
}

function bmiCalc (weight, height) {
	var weight = prompt("Enter your weight");
	var height = prompt("Enter your height");
	return alert(weight/(height*height));
	var answered = true;
}

function morCalc () {
	var p = parseInt(prompt("Enter the principle amount (the remaining amount to pay after the deposit)"));
	var i = (parseFloat(prompt("Enter the given interest rate")))/12;
	var m = (parseInt(prompt("Enter the years the mortgage lasts for")))*12;
	return alert(p * (i * (Math.pow(1 + i, m))) / (Math.pow(1 + i, m) - 1));
	var answered = true;
}

var calculatorChoice = function (choice) {
	var choice = prompt("Which calculator do you want to use? Normal, scientific, bmi or mortgage? or quit if you like");
	if (choice === "normal") {
		normalCalc();
	} else if (choice === "scientific") {
		scienceCalc();
	} else if (choice === "bmi") {
		bmiCalc();
	} else if (choice === "mortgage") {
		morCalc();
	} else if (choice === "quit") {
		alert("No more of this damned loop!");
		var answered = false;
	} else {
		alert("None of the available calculators selected");
	}
}

var answered = true;

while (answered) {
	calculatorChoice();
}


