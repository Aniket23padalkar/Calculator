# Intermediate Calculator

-   Can perform addition, subtraction, multiplication, and division
-   **C (Clear)** button to reset everything
-   **= (Equals)** button to calculate the result
-   **DEL (Backspace)** button to delete last entry
-   Full keyboard support
-   Responsive UI

## Description

This is my **Intermediate Calculator** project.  
Here I explored functions more deeply and added keyboard support.  
I also handled multiple arithmetic operators in the input.  
Honestly, I learned a lot while making this.

## How It Works

-   Each button click updates the `input` variable.
-   **C button:** calls `clearInput()` clears input and sets display to `0`.
-   **= button:** calls `evaluateInput()` evaluates expression using `eval()` inside a `try-catch`.
-   **DEL button:** calls `delValue()` deletes last character and updates display.
-   **Numbers / operators:** calls `appendValue()` → checks condition, adds value to input, updates display.
-   Keyboard support is added → keys just trigger the same functions.

## Challenges

-   Biggest challenge: I didn’t want multiple operators in a row.  
    Example: `5++6` should not happen.
-   For this, I had to figure out a way to check the **last character**.
-   I struggled, researched, tried different ways — finally cracked it by adding a condition that stops new operator if the last char is already an operator.

[Detailed Explanation](./EXPLAIN.md)
