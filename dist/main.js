"use strict";
function createButtons() {
    const buttonsContainer = document.getElementById("buttons");
    if (!buttonsContainer)
        return console.error("Buttons container not found");
    for (let i = 1; i <= 9; i++) {
        const button = document.createElement("button");
        button.id = `button-${i}`;
        button.textContent = i.toString();
        button.addEventListener("click", () => {
            console.log(`Button ${i} clicked!`);
        });
        buttonsContainer.appendChild(button);
        button.style.gridRow = "4";
        if (i > 3)
            button.style.gridRow = "3";
        if (i > 6)
            button.style.gridRow = "2";
    }
    ;
}
;
createButtons();
