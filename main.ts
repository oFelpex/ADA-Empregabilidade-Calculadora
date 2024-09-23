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
	let currentValue: number;

	display.addEventListener("input", () =>{
		currentValue = Number(display.value);
		console.log(currentValue);
	});

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

	const squaredButton = document.createElement("button");
	squaredButton.id = "button-squared";
	squaredButton.textContent = "²";
	squaredButton.style.gridRow = "5";
	squaredButton.classList.add("squaredButton");
	squaredButton.addEventListener("click", () => {
		display.value = String((Math.pow(currentValue, 2)));
		if(display.value === "NaN") {
			alert("Erro matemático!")
			display.value = "0";
		}
	});
	buttonsContainer.appendChild(squaredButton);

	const cubedButton = document.createElement("button");
	cubedButton.id = "button-cubed";
	cubedButton.textContent = "³";
	cubedButton.style.gridRow = "5";
	cubedButton.classList.add("cubedButton");
	cubedButton.addEventListener("click", () => {
		display.value = String((Math.pow(currentValue, 3)));
		if(display.value === "NaN") {
			alert("Erro matemático!")
			display.value = "0";
		}
	});
	buttonsContainer.appendChild(cubedButton);

	const sqrtButton = document.createElement("button");
	sqrtButton.id = "button-sqrt";
	sqrtButton.textContent = "√";
	sqrtButton.style.gridRow = "1";
	sqrtButton.addEventListener("click", () => {
		display.value = String((Math.sqrt(currentValue).toFixed(2)));
		if(display.value === "NaN") {
			alert("Erro matemático!")
			display.value = "0";
		}
	});
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

	function showNumbersOnDisplay() {
		let buttons = Array.from(document.getElementsByClassName("displayButton"));

		buttons.forEach((element) => {
			element.addEventListener("click", () => {
				if (display.value === "0") {
					display.value = "";
				}
				display.value += element.innerHTML;
				currentValue = Number(display.value);
				console.log(currentValue);
			})
		});
			
		
	}

	showNumbersOnDisplay();
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