// --- 2. STORE APPLICATION DATA ---
const appName = "SpendWise";
const currency = "$";

/**
 * --- 3. COLLECT USER INPUT & 4. PERFORM CALCULATIONS ---
 * Main function that orchestrates data collection via prompts and calculations.
 */
function runSpendWiseApp() {
    console.log(`=== Welcome to ${appName} ===`);

    // Collecting user inputs via browser prompts
    let inputBudget = prompt("Enter your total monthly budget/income:");
    let inputExpenses = prompt("Enter your total monthly expenses:");

    // Convert string input values to numbers for arithmetic processing
    let budget = parseFloat(inputBudget);
    let expenses = parseFloat(inputExpenses);

    // Validate inputs
    if (isNaN(budget) || isNaN(expenses)) {
        console.error("Invalid input detected! Please enter valid numbers for budget and expenses.");
        alert("Please refresh and enter valid numerical values.");
        return;
    }

    // Perform balance calculation using our reusable function
    let remainingBalance = calculateBalance(budget, expenses);

    // --- 6. DISPLAY RESULTS ---
    displayResults(budget, expenses, remainingBalance);
}

/**
 * --- 5. CREATE REUSABLE FUNCTIONS (Calculation) ---
 * Calculates the remaining balance by subtracting expenses from the budget.
 * @param {number} totalBudget 
 * @param {number} totalExpenses 
 * @returns {number} The calculated remaining balance
 */
function calculateBalance(totalBudget, totalExpenses) {
    return totalBudget - totalExpenses;
}

/**
 * --- 5. CREATE REUSABLE FUNCTIONS (Display) ---
 * Organizes log output to clearly display the financial results in the console.
 * @param {number} budget 
 * @param {number} expenses 
 * @param {number} balance 
 */
function displayResults(budget, expenses, balance) {
    console.log("-----------------------------------------");
    console.log(`Financial Report for ${appName}:`);
    console.log(`-----------------------------------------`);
    console.log(`Total Budget:   ${currency}${budget.toFixed(2)}`);
    console.log(`Total Expenses: ${currency}${expenses.toFixed(2)}`);
    console.log(`-----------------------------------------`);
    
    if (balance >= 0) {
        console.log(`Remaining Balance: ${currency}${balance.toFixed(2)} (Great job staying within budget!)`);
    } else {
        console.log(`Remaining Balance: -${currency}${Math.abs(balance).toFixed(2)} (Warning: You are over budget!)`);
    }
    console.log("-----------------------------------------");
}