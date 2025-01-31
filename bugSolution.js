function foo(a, b) {
  // Type checking and explicit conversion
  a = Number(a);
  b = Number(b);

  // Check if inputs are valid numbers
  if (isNaN(a) || isNaN(b)) {
    return "Invalid input: Inputs must be numbers";
  }
  return a + b; // Numerical addition
}

console.log(foo(1, '1')); // Output: 2
console.log(foo(1, 2)); // Output: 3
console.log(foo('a', 1)); //Output: Invalid input: Inputs must be numbers