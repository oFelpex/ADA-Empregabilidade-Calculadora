"use strict";
function createButtons() {
    const buttonsContainer = document.getElementById("buttons");
    if (!buttonsContainer)
        return console.error("Buttons container not found");
    for (let i = 0; i <= 9; i++) {
        const n_button = document.createElement("button");
        n_button.id = `button-${i}`;
        n_button.textContent = i.toString();
        n_button.addEventListener("click", () => {
            console.log(`Button ${i} clicked!`);
        });
        buttonsContainer.appendChild(n_button);
        n_button.style.gridRow = "5";
        if (i > 0)
            n_button.style.gridRow = "4";
        if (i > 3)
            n_button.style.gridRow = "3";
        if (i > 6)
            n_button.style.gridRow = "2";
    }
    ;
    const clearButton = document.createElement("button");
    clearButton.id = "button-c";
    clearButton.textContent = "C";
    buttonsContainer.appendChild(clearButton);
}
;
createButtons();
