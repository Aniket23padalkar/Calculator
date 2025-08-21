const display = document.getElementById("cal-display");
const buttons = document.querySelectorAll(".btn");

let input = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            input = "";
            display.textContent = "0";
        } else if (value === "=") {
            try {
                const result = eval(input);
                input = result.toString();
                display.textContent = result;
            } catch (err) {
                display.textContent = "Error";
                input = "";
            }
        } else {
            input += value;
            display.textContent = input;
        }
    });
});
