# Unexpected String Concatenation Bug in JavaScript

This repository demonstrates a common, yet subtle, bug in JavaScript related to loose typing and the unexpected concatenation of strings when performing arithmetic operations.

## Bug Description

The `foo` function intends to add two numbers, but due to JavaScript's dynamic typing, it instead concatenates the numbers as strings when one of the inputs is a string.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run the JavaScript code using a Node.js runtime environment.
4. Observe the unexpected output: "11" instead of 2.

## Solution

The `bugSolution.js` file presents a corrected version of the function using explicit type checking and conversion to ensure addition is always performed on numbers.