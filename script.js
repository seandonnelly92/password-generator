// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var newArray = [] // Defining a new array that will later contain all possible characters of the password.

// Function to prompt user for password options
function getPasswordOptions() {
  newArray = []
  // No. of Characters
  var noOfCharacters = prompt("How many characters should your password have? Choose between 8 and 128 characters.") 
  
  if (isNaN(noOfCharacters) || noOfCharacters < 8 || noOfCharacters > 128) { // Validation: if it not a number or less than 8 or more than 128...
    alert("You must input a number between 8 and 128");
    getPasswordOptions() // This re-calls the function to start it again if the invalid conditions are met.
  }
  
  var includeSpecialCharacters = confirm("Would you like to include special characters in your password? Choose 'OK' for yes and 'Cancel' for no.")
  if (includeSpecialCharacters) {
    newArray = [...specialCharacters]
  }

  var includeNumbers = confirm("Would you like to include numbers in your password? Choose 'OK' for yes and 'Cancel' for no.")
  if (includeNumbers) {
    newArray = [...newArray, ...numericCharacters]
  }

  var includeLowerCase = confirm("Would you like to include lower case letters in your password? Choose 'OK' for yes and 'Cancel' for no.")
  if (includeLowerCase) {
    newArray = [...newArray, ...lowerCasedCharacters]
  }
  
  var includeUpperCase = confirm("Would you like to include upper case letters in your password? Choose 'OK' for yes and 'Cancel' for no.")
  if (includeUpperCase) {
    newArray = [...newArray, ...upperCasedCharacters]
  }

  newArray = [...newArray, ...newArray, ...newArray, ...newArray, ...newArray] // I added this to ensure that the same character could appear multiple times. This would not be possible if we only included one 'newArray'.
  console.log(newArray)

  // Validation: must include one character type, must be 8-128 characters. 

}



// Function to generate password with user input
function generatePassword() {
  getPasswordOptions()
  shuffleArray()

  var randomPassword;

  return randomPassword

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate'); 
// Declaring a new variable that is the button in the
// html doc. 

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // calling the generatePassword function and storing the resulting value in this password variable.
  var passwordText = document.querySelector('#password'); // declare new variable to reference the placeholder text

  passwordText.value = password; // 
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);







// For each tool in our tool belt: provide the name and what it's good for

// 1. Variables 
// 	1. Good for naming things so that we can use them later
// 2. Constant
// 	1. For naming variables whose value won't change 
// 3. Strings
// 	1. collections of characters
// 4. String Methods
// 	5. Make changes to strings like toUpper to Lower
// 5. For loops
// 	1. iterating through data, when you want to do something to each thing
// 6. Alerts
// 	1. Pop up to give the user information OR alert them! or warn them. 
// 7. Arrays --- COLLECTION
// 	1. For collecting a list of things
// 	2. keeps your order! (we use index)
// 8. Array Methods
// 	1. When I want to do things to array, slice, pop, splice, sort, etc
// 9. Iterative Methods
// 	1. Map, for each when I want to do something to each element in the area 
// 10. Functions
// 	1. a task that can be done multiple times, helps you avoid repetition 
// 11. Function arguments
// 	1. good for when we want to give functions an input 
// 12. Methods
// 	1. a task that can be done multiple times THAT LIVES inside an object, helps you avoid repetition 
// 13. This
// 	1. `this` inside of a method is used to references the `properties` and `methods` of the object we're inside. 
// 	2. really good at selecting things inside of some scope. 
// 	3. inside of object, this refers to the object. in global scope, it refers to window. 
// 14. Objects --- COLLECTION
// 	1. good for collecting information about a THING (object). An account, a password, anything in the real world. 
// 	2. Get things by their key. Order doesn't matter. 
// 15. pseudo-code
// 	1. helps you write down a blueprint before you do the actual work itself. helps you not waste time.
// 16. Console.log
// 	1. print the output of whatever we're coding
// 17. mathematical and comparison operators  
// 	1. comparing things in conditions
// 	2. to do maths 
// 18. Conditional statements (if else)
// 	1. control your logic 
// 19. Switch statement 
// 	1. good for matching on a value 
// 20. Scope
// 	1. good for understanding where a variable is available (local or global!)
// 21. debugger
// 	1. good for verifying bugs + weird behaviour 
// 22. Prompts
// 	1. Good for getting the user's input 
// 23. Booleans
// 	1. good for figuring out if things are true OR false 