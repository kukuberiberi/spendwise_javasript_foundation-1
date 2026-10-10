# SpendWise - JavaScript Foundation

## What SpendWise Does
SpendWise is a personal budget and expense tracking application designed to help users manage their finances effectively. This milestone project introduces core JavaScript functionality, transforming a static web page into an interactive data-processing tool.

## JavaScript Concepts Implemented
* **Variables & Data Types:** Using `const` and `let` to store string, number, and boolean values.
* **User Input Collection:** Using browser `prompt()` dialogs to dynamically gather runtime data from users.
* **Arithmetic Calculations:** Processing numerical user inputs to compute remaining budgets.
* **Reusable Functions:** Encapsulating specific tasks (such as balance computation and console output formatting) into modular, reusable functions.
* **Control Flow:** Using `if/else` conditional statements and `isNaN()` validation checks to handle user inputs safely.

## How Variables Are Used
Variables are declared to track application configurations and user state:
* `const appName` and `const currency` store fixed configuration values.
* `let budget` and `let expenses` store numeric values inputted dynamically by the user via prompts.

## How User Input Is Collected
User input is captured using JavaScript's native `prompt()` method when the user clicks the "Start Budget Tracker" button on the webpage. The captured string values are immediately converted into numeric formats using `parseFloat()` for processing.

## How Calculations Are Performed
Calculations are executed through arithmetic subtraction within a dedicated function:
```javascript
function calculateBalance(totalBudget, totalExpenses) {
    return totalBudget - totalExpenses;
}
