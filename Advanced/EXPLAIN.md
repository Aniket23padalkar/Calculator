# Detail Explanation

## Description

Here my focus is on **Local Storage** and the new features, since in earlier versions I already explained the calculator basics.

---

-   While building my `ToDo App`, I explored different ways to store data in local storage and found one approach that clicked with me.
-   I learned that data in local storage is always stored as **strings**.

    -   To save → we `stringify()` the data.
    -   To use it again → we `parse()` it back into JavaScript.

-   **Functions I used:**

    -   `saveCalToStorage()` pushes calculation (expression + result) to the history array.
    -   `saveToHistory()` saves history array into local storage.
    -   `renderHistory()` loads history from local storage and displays it.
    -   `DOMContentLoaded` runs `renderHistory()` on page load.

-   On top, I created an empty `history` array.
-   In `evaluateInput()`, after getting input + result (`"2+5"`, `"7"`), I send them to `saveCalToStorage()`.
    -   That function stores data as `{ expression, result }` into the history array.
    -   Then I call `saveToHistory()` and `renderHistory()`.
-   `saveToHistory()` stringifies the array and saves it with key `"history"`.
-   `renderHistory()` parses stored data back into JS and updates the DOM.
-   **History window** is hidden by default; clicking the button toggles it.
-   **Clear history button** calls `clearStorageHistory()` empties the array, clears innerHTML, then calls `saveToHistory()` and `renderHistory()` again.

-   **Highlight Buttons:**
    -   In CSS I made an `.active` class (slightly darker background).
    -   Function `highlightButton()` handles highlighting when keys are pressed.
    -   Added `keydown` listener matches pressed key with button text and adds `.active`, then removes it after 150ms.
    -   For special keys (Enter, Backspace, Delete, C), I made separate classes and handled them with conditions.
    -   This way both normal and special buttons highlight correctly.

## Challenges

-   Applying local storage the way I understood it.
-   Using **event delegation** instead of adding listeners on every button.
-   Getting button highlight logic right (luckily I practiced this in my ToDo project).

## Final Thought

This advanced calculator really boosted my confidence.  
I managed to break the problem into steps and solve it in a way that made sense to me.  
I feel I now understand **local storage** properly, and coming back to the calculator project was 100% worth it.
