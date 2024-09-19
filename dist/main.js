"use strict";
function createButtons() {
    const buttonsContainer = document.getElementById("buttons");
    if (!buttonsContainer)
        return console.error("Buttons container not found");
    for (let i = 9; i >= 1; i--) {
        const button = document.createElement("button");
        button.id = `button-${i}`;
        button.textContent = i.toString();
        button.addEventListener("click", () => {
            console.log(`Button ${i} clicked!`);
        });
        buttonsContainer.appendChild(button);
    }
    ;
}
;
createButtons();
