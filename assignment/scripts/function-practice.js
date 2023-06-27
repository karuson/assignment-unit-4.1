console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `${"Hello,"} ${name}${"!"}`
}
// Remember to call the function to test
console.log( 'Testing - should say "Hello, Ben!"', helloName("Ben") );

// 3. Function to add two numbers together & return the result
function addNumbers(num0, num1) {
  let answer = num0 + num1;
  // return firstNumber + secondNumber;
  return answer;
}
// call addNumbers and console log
console.log("Testing - should get 105 for answer", addNumbers(17, 88));

// 4. Function to multiply three numbers & return the result
function multiplyThree( num0, num1, num2 ) {
  let answer = num0 * num1 * num2;
  return answer;
}
// call multiplyThree and console log
console.log("Testing 2 x 2 x 2, should equal 8", multiplyThree(2, 2, 2));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
  return false;
  } // end if
} // end isPositive

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));

// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.js
function getLast(array) {
  if (array.length > 0) {
    last = array[array.length - 1];
    return last;
  } else {
    return `undefined`.js
  } // end if else
} // end getLast

// Call and test function
console.log('should log 3:', getLast([0, 1, 2, 3]));
console.log('should log 15', getLast([0, 5, 10, 15]));
console.log('should log undefined', getLast([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {

}

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll() {
  let sum = 0;
  // TODO: loop to add items

  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}