// Assignment Code
var generateBtn = document.querySelector("#generate");

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

function generatePassword(length){

}

// Write password to the #password input
function writePassword() {
  var length = askLength();

  var password = generatePassword(length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
