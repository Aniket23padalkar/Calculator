# Detail Explanation

-   First I selected the **display** and **buttons** using `getElementById` and `querySelectorAll`.
-   Then I created an `input` variable with `let` because I had to keep updating it with new values.
-   The first function I made was `updateDisplay()`, where I set `display.textContent` to the passed value or `"0"`.
-   I called `updateDisplay()` at the very top so when the screen loads, the display already shows `0` before we start.

-   After that, I added an **event listener** to all buttons using a `forEach` loop.
-   On every click, I grabbed the `textContent` and `dataset.value` (because I used an icon for the delete button) of the clicked button and stored it in a `value` variable.
-   Then I applied conditions:

    1. Each button click updates the `input` variable.
    2. **C button:** calls `clearInput()` clears input and resets display to `0`.
    3. **= button:** calls `evaluateInput()` evaluates expression using `eval()` inside a `try-catch`.
    4. **DEL button:** calls `delValue()` removes the last character and updates display.
    5. **Numbers / operators:** calls `appendValue()` checks conditions, adds value to input, and updates display.

-   **`appendValue()` function**

    -   I didn’t want multiple operators in a row, so I added logic for that.
    -   I created an array of operators and also sliced the last character of input to compare.
    -   If the value is a number just update input and display.
    -   If the value is an operator check if it’s in the operator array, and if the last char is already an operator, then don’t add it (basically return). This way no duplicate operators come in a row.

-   **Keyboard Support**
    -   I added a `keydown` event listener and stored `e.key` in a variable.
    -   Then I applied conditions to call the same functions I already created.
    -   First check: if the key is a number or operator, then call `appendValue()`.
    -   For Backspace call `delValue()`.
    -   For Enter call `evaluateInput()`.
    -   For Escape call `clearInput()`.

## Challenges

-   The biggest struggle was the `appendValue()` function. I researched a lot and finally figured out that I could directly slice the last char, but I first stored it in a variable to keep the code clean and easy to read.
-   For keyboard support, at first, I just directly appended values. But then every single keypress (even letters) was showing up in the display — which I didn’t want.
-   I realized I need conditions here as well. So I only allowed numbers and operators to be passed into `appendValue()`. That solved it.

## Final Thought

This project taught me the real importance of functions.  
I still haven’t fully grasped every part of `appendValue()`, but I know with time it’ll click better.  
Overall, I’m really happy with this project because it felt clean, structured, and a big step up from the basic calculator.
