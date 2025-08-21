const display = document.getElementById("cal-display");
const buttons = document.querySelectorAll(".btn");

let input = "";
updateDisplay();

function updateDisplay(value) {
    display.textContent = value || "0";
}

function clearInput() {
    input = "";
    updateDisplay("0");
}

function evaluateInput() {
    try {
        const result = eval(input);
        input = result.toString();
        updateDisplay(result);
    } catch (err) {
        updateDisplay("Error");
        input = "";
    }
}

function delValue() {
    input = input.slice(0, -1);
    updateDisplay(input);
}

function appendValue(value) {
    const operator = ["+", "-", "*", "/", "."];
    const lastChar = input.slice(-1);

    if (operator.includes(value)) {
        if (operator.includes(lastChar)) return;
    }

    input += value;
    updateDisplay(input);
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.dataset.value || button.textContent;

        if (value === "C") {
            clearInput();
        } else if (value === "=") {
            evaluateInput();
        } else if (value === "DEL") {
            delValue();
        } else {
            appendValue(value);
        }
    });
});

document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
        appendValue(key);
    } else if (key === "Enter" || key === "=") {
        e.preventDefault();
        evaluateInput();
    } else if (key === "Backspace") {
        delValue();
    } else if (key.toUpperCase() === "C" || key === "Delete") {
        clearInput();
    }
});
