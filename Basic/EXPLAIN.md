# Detail Explanation

-   First I selected the **display** and **buttons** using `getElementById` and `querySelectorAll`.
-   Then I added an **event listener** to all buttons with the help of a `forEach` loop.
-   On every click, I collected the text content of the clicked button and stored it in a `value` variable.

-   Applied conditions:
    -   **C button** if value is equal to `C`, then clear the display and input.
    -   **= button** if value is equal to `=`, then evaluate the input.
    -   For this, I had to create a separate variable `input` at the top.
    -   I used `let` for `input` since I needed to reassign its value.
    -   If the clicked button was a number or operator, I kept adding that value to `input` and updated the display.

## Challenges

-   At first, when I evaluated input directly, the app used to break if a user entered invalid input.
-   I learned about `try-catch` and used it. This way, if the input is valid, it evaluates normally, and if not, it shows an **Error** message instead of crashing.

## Final Thought

This was my first project, so it took a good amount of time. But in the end, it was worth it because I understood the basics clearly.
