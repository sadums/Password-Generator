// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays of usable characters
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const special = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '/', '?'];



// Prompt user for password length
function askLength(){
  let lengthCorrect = false;
  while(!lengthCorrect){
    var length = prompt("Please enter a length between 8-128 characters");
    // check if inputted length fits criteria. if length does not fit, will loop.
    if(parseInt(length) > 8 && parseInt(length) < 128){
      lengthCorrect = true;
    }
  }
  return length;
}

function askChars(){
  let selected = false;
  while(!selected){
    // ask for criteria
    var lowercase = confirm("Use lowercase alphabet characters?");
    var uppercase = confirm("Use uppercase alphabet characters?");
    var numeric = confirm("Use numeric characters?");
    var special = confirm("Use special characters?");
    // if none are selected, loop will repeat
    if(lowercase || uppercase || numeric || special){
      selected = true;
    }else{
      alert("please select at least one.")
    }
  }
  // return an object containing the criteria for character selection
  return {
    "lowercase" : lowercase,
    "uppercase" : uppercase,
    "numeric" : numeric,
    "special" : special
  }
}

// randomly generate password based on user criteria
function generatePassword(){
  var length = askLength();
  var charCriteria = askChars();
  console.log(charCriteria);

  let password = "";
}

// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// event listener for "Generate Password" button
generateBtn.addEventListener("click", writePassword);
