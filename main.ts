function createDisplay() {
	const display = (document.getElementById("display") as HTMLInputElement);
	if (!display) return console.error("Display not found");
	display.addEventListener("input", () => {
		if (display.value.length > 15) {
			display.value = display.value.slice(0, 15);
		}
		display.value = display.value.replace(/[^0-9,.%+-/]/g, "");

	});
	display.addEventListener("focusin", () => {
		if (display.value === "0") {
			display.value = "";
		}
	});
	display.addEventListener("focusout", () => {
		if (display.value.trim() === "") {
			display.value = "0";
		}
	});
	return display;
}

function createButtons() {
	let display = (createDisplay() as HTMLInputElement);

	const buttonsContainer = document.getElementById("buttons");
	if (!buttonsContainer) return console.error("Buttons container not found");
	for (let i: number = 0; i <= 9; i++) {
		const n_button = document.createElement("button");
		n_button.id = `button-${i}`;
		n_button.classList.add("displayButton");
		n_button.textContent = i.toString();
		buttonsContainer.appendChild(n_button);
		n_button.style.gridRow = "5";
		if (i > 0)
			n_button.style.gridRow = "4";
		if (i > 3)
			n_button.style.gridRow = "3";
		if (i > 6)
			n_button.style.gridRow = "2";
	};
	const clearButton = document.createElement("button");
	clearButton.id = "button-c";
	clearButton.textContent = "C";
	clearButton.addEventListener("click", () => display.value = "0")
	buttonsContainer.appendChild(clearButton);

	const commaButton = document.createElement("button");
	commaButton.id = "button-comma";
	commaButton.textContent = ",";
	commaButton.style.gridRow = "5";
	commaButton.classList.add("displayButton");
	buttonsContainer.appendChild(commaButton);

	const percentButton = document.createElement("button");
	percentButton.id = "button-percent";
	percentButton.textContent = "%";
	percentButton.style.gridRow = "5";
	percentButton.classList.add("displayButton");
	buttonsContainer.appendChild(percentButton);

	const sqrtButton = document.createElement("button");
	sqrtButton.id = "button-sqrt";
	sqrtButton.textContent = "√";
	sqrtButton.style.gridRow = "1";
	buttonsContainer.appendChild(sqrtButton);

	const multiplyButton = document.createElement("button");
	multiplyButton.id = "button-multiply";
	multiplyButton.textContent = "*";
	multiplyButton.style.gridRow = "1";
	multiplyButton.classList.add("displayButton");
	buttonsContainer.appendChild(multiplyButton);

	const divisionButton = document.createElement("button");
	divisionButton.id = "button-division";
	divisionButton.textContent = "÷";
	divisionButton.style.gridRow = "1";
	divisionButton.classList.add("displayButton");
	buttonsContainer.appendChild(divisionButton);

	const minusButton = document.createElement("button");
	minusButton.id = "button-minus";
	minusButton.textContent = "-";
	minusButton.style.gridRow = "2";
	minusButton.classList.add("displayButton");
	buttonsContainer.appendChild(minusButton);

	const plusButton = document.createElement("button");
	plusButton.id = "button-plus";
	plusButton.textContent = "+";
	plusButton.style.gridRow = "3";
	plusButton.classList.add("displayButton");
	buttonsContainer.appendChild(plusButton);

	const equalButton = document.createElement("button");
	equalButton.id = "button-equal";
	equalButton.textContent = "=";
	equalButton.style.gridRow = "4 / span 2";
	buttonsContainer.appendChild(equalButton);

	function showNumbers() {
		let buttons = Array.from(document.getElementsByClassName("displayButton"));

		buttons.forEach((element) => {
			element.addEventListener("click", () => {
				if (display.value === "0") {
					display.value = "";
				}
				display.value += element.innerHTML;
			})
		});
			
		
	}
	showNumbers();
};
createButtons();

function operations(num1: number, num2: number, operation: string) {
	let result: number;
	switch (operation) {
		case "plus":
			result = (num1 + num2);
			break;
		case "minus":
			result = (num1 - num2);
			break;
		case "multiply":
			result = (num1 * num2);
			break;
		case "division":
			result = (num1 / num2);
			break;
		default:
			result = 0;
			break;
	}
	return result;
}