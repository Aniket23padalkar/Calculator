# Basic Calculator

-   Performs addition, subtraction, multiplication, and division
-   Clear (C) button to reset
-   Equals (=) button for evaluation

## Live link

[Basic Calculator](https://aniket23padalkar.github.io/Calculator/Basic/)

## Description

This was my **first JavaScript project**. I kept it simple because I wanted to focus on **fundamentals** like event handling, updating the DOM, and handling input logic.

## How It Works

-   Each button click updates the `input` variable.
-   **C button:** clears input and display.
-   **= button:** evaluates the input using `eval()` inside a `try-catch`.
-   Numbers/operators: append to input and update the display.

## Challenges

-   Handling **invalid input** was tricky at first. Without `try-catch`, the app would break. Later I fixed it to show `"Error"` instead of crashing.
-   I skipped **backspace** in this version to avoid confusion and added it in the next version.

[Detail Explanation](./EXPLAIN.md)
