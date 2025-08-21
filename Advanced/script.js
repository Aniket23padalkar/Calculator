const display = document.getElementById("display");
const btnSection = document.getElementById("button-section");
const historyList = document.getElementById("history-list");
const historyBtn = document.getElementById("history");
const clearHistory = document.getElementById("clear-history");

let input = "";
let history = [];

function saveToHistory() {
    localStorage.setItem("history", JSON.stringify(history));
}

document.addEventListener("DOMContentLoaded", () => {
    const stored = localStorage.getItem("history");

    if (stored) {
        history = JSON.parse(stored);
    }
    renderHistory();

    const lastResult = localStorage.getItem("lastResult");
    if (lastResult) {
        display.textContent = lastResult;
    }
});

function renderHistory() {
    historyList.innerHTML = "";

    history.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.expression} = ${item.result}`;

        historyList.appendChild(li);
    });
}

function saveCalToStorage(expression, result) {
    history.push({
        expression,
        result,
    });
    saveToHistory();
    renderHistory();
}

function clearStorageHistory() {
    history = [];
    historyList.innerHTML = "";
    saveToHistory();
    renderHistory();
}

function updateDisplay(value) {
    display.textContent = value || "0";
    localStorage.setItem("lastResult", display.textContent);
}

function evaluateInput() {
    try {
        const result = eval(input);
        saveCalToStorage(input, result);
        input = result.toString();
        updateDisplay(result);
    } catch (err) {
        updateDisplay("Error");
        input = "";
        saveCalToStorage(input, "Error");
    }
}

function clearInput() {
    input = "";
    updateDisplay("0");
}

function deleteInput() {
    input = input.slice(0, -1);
    updateDisplay(input);
}

function appendValue(value) {
    const operator = ["/", "*", "+", "-", "."];
    const lastChar = input.slice(-1);

    if (operator.includes(value)) {
        if (input === "" || operator.includes(lastChar)) return;
    }
    input += value;
    updateDisplay(input);
}

function calculateTheText(value) {
    if (value === "=") {
        evaluateInput();
    } else if (value === "C") {
        clearInput();
    } else if (value === "DEL") {
        deleteInput();
    } else {
        appendValue(value);
    }
}

function highlightButton(key) {
    const btns = document.querySelectorAll(".button");

    btns.forEach((btn) => {
        if (btn.textContent === key) {
            btn.classList.add("active");
            setTimeout(() => btn.classList.remove("active"), 150);
        } else if (key === "Backspace") {
            btn.classList.add("backspace-active");
            setTimeout(() => btn.classList.remove("backspace-active"), 150);
        } else if (key.toUpperCase() === "C" || key === "Delete") {
            btn.classList.add("delete-active");
            setTimeout(() => btn.classList.remove("delete-active"), 150);
        } else if (key === "Enter") {
            btn.classList.add("evaluate-active");
            setTimeout(() => btn.classList.remove("evaluate-active"), 150);
        }
    });
}

historyBtn.addEventListener("click", () => {
    const historyContainer = document.getElementById("history-container");
    historyContainer.classList.toggle("hidden");
});

clearHistory.addEventListener("click", () => {
    clearStorageHistory();
});

btnSection.addEventListener("click", function (e) {
    const button = e.target.closest("button");
    if (button) {
        const value = button.dataset.value || button.textContent;

        calculateTheText(value);
    }
});

document.addEventListener("keydown", (e) => {
    const key = e.key;

    highlightButton(key);

    if (key === "Enter") {
        evaluateInput();
    } else if (key.toUpperCase() === "C" || key === "Delete") {
        clearInput();
    } else if (key === "Backspace") {
        deleteInput();
    } else if (!isNaN(key) || ["/", "*", "+", "-", "."].includes(key)) {
        appendValue(key);
    }
});
