/*
Filename: complexCode.js
Content: Complex JavaScript code with multiple functions and complex logic.
*/

// Function to calculate the factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Function to find the Fibonacci series up to a given number of terms
function fibonacciSeries(numTerms) {
  let series = [0, 1];

  if (numTerms <= 2) {
    return series.slice(0, numTerms);
  }

  for (let i = 2; i < numTerms; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }

  return series;
}

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to generate random numbers between a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to validate if a string is a palindrome
function isPalindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const reversedStr = reverseString(formattedStr);

  return formattedStr === reversedStr;
}

// Function to calculate the sum of the digits of a number
function sumDigits(num) {
  let sum = 0;
  const numStr = Math.abs(num).toString();

  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }

  return sum;
}

// Main code execution
console.log("Factorial of 5:", factorial(5));
console.log("Is 17 Prime?", isPrime(17));
console.log("Fibonacci Series (7 terms):", fibonacciSeries(7));
console.log("Reversed String:", reverseString("Hello, World!"));
console.log("Random Number (1-10):", getRandomNumber(1, 10));
console.log("Is 'racecar' a Palindrome?", isPalindrome("racecar"));
console.log("Sum of Digits (12345):", sumDigits(12345));