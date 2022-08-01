/**
 * Print numbers from 1 to n, n being the given input.
 * Print Fizz if the number is divisible by 3.
 * Print Buzz if the number is divisible by 5.
 * Print FizzBuzz if the number is divisible by both 3 and 5.
 */

// const fizzbuzz = (n) => {
//   for (let i = 1; i <= n; i++) {
//     if (i % 15 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else {
//       console.log(i);
//     }
//   }
// };

// const fizzbuzz = (n) => {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0) {
//       if (i % 5 === 0) {
//         console.log("Fizzbuzz");
//       } else {
//         console.log("Fizz");
//       }
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// };

const fizzbuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
  }
};

fizzbuzz(45);
