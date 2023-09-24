/* Create a function that calculates the factorial of a number and prints the result. */

const factorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  console.log(result);
};
