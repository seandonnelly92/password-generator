// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var potentialCharacters = []; // Defining a new array that will later contain all possible characters of the password.
var noOfCharacters = 8;

// Function to prompt user for password options
function passwordPrompts() {
  potentialCharacters = [];
  noOfCharacters = prompt(
    "How many characters should your password have? Choose between 8 and 128 characters."
  );

  if (isNaN(noOfCharacters) || noOfCharacters < 8 || noOfCharacters > 128) {
    // Validation: if it not a number or less than 8 or more than 128...
    alert("You must input a number between 8 and 128");
    passwordPrompts(); // This re-calls the function to start it again if the invalid conditions are met.
    return;
  }

  var includeSpecialCharacters = confirm(
    "Would you like to include special characters in your password? Choose 'OK' for yes and 'Cancel' for no."
  );
  if (includeSpecialCharacters) {
    potentialCharacters = [...specialCharacters];
  }

  var includeNumbers = confirm(
    "Would you like to include numbers in your password? Choose 'OK' for yes and 'Cancel' for no."
  );
  if (includeNumbers) {
    potentialCharacters = [...potentialCharacters, ...numericCharacters];
  }

  var includeLowerCase = confirm(
    "Would you like to include lower case letters in your password? Choose 'OK' for yes and 'Cancel' for no."
  );
  if (includeLowerCase) {
    potentialCharacters = [...potentialCharacters, ...lowerCasedCharacters];
  }

  var includeUpperCase = confirm(
    "Would you like to include upper case letters in your password? Choose 'OK' for yes and 'Cancel' for no."
  );
  if (includeUpperCase) {
    potentialCharacters = [...potentialCharacters, ...upperCasedCharacters];
  }

  if (
    !includeSpecialCharacters &&
    !includeNumbers &&
    !includeLowerCase &&
    !includeUpperCase
  ) {
    alert("You must select at least one character type.");
    passwordPrompts(); // This re-calls the function to start it again. I may go back and make it start from the second prompt by nesting a new function.
    return;
  }
}

// Function to select X random characters from the potentialCharacters to form the password

function generateRandomPassword(potentialCharacters, noOfCharacters) {
  let randomPassword = "";
  for (let i = 0; i < noOfCharacters; i++) {
    // Loops through the number of characters we have
    const randomIndex = Math.floor(Math.random() * potentialCharacters.length); // Declares new variable called randomIndex which is a random index from the array
    // Math.random gives a random float between 0 and 1 e.g. 0.27. The max array length is 85 if all character types are accepted. So it could be 0.27*85 = 22.95. Math.floor rounds it down. So it would be 22. Index 22 would be chosen.
    randomPassword += potentialCharacters[randomIndex]; // Append the selected character to the password. += is the compound assignment operator for addition and assignment. It adds the value on the right-hand side to the variable on the left-hand side and then assigns the result back to the variable.
  }
  return randomPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // Creates a new var which is the html document's button with the id #generate

// Write password to the #password input
function writePassword() {
  passwordPrompts();
  var password = generateRandomPassword(potentialCharacters, noOfCharacters); // calling the generatePassword function and storing the resulting value in this new password variable.
  var passwordText = document.querySelector("#password"); // declare new variable which is filled with the placeholder text
  passwordText.value = password; // Overwriting the placeholder text with the generated password
  potentialCharacters = []; // emptying the potential characters array so that the password generator can be re-used
  noOfCharacters = 0; // Resetting noOfCharacters
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
