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

// Prompt user for which character criteria to follow
function askChars(){
  let selected = false;
  var chars = []
  while(!selected){
    // ask for criteria
    chars[0] = {"criteria": lowercase, "result": confirm("Use lowercase alphabet characters?")}
    chars[1] = {"criteria": uppercase, "result": confirm("Use uppercase alphabet characters?")}
    chars[2] = {"criteria": numbers, "result": confirm("Use numeric characters?")}
    chars[3] = {"criteria": special, "result": confirm("Use special characters?")}

    // if none are selected, loop will repeat
    chars.forEach(x => (selected += x.result)&1);
    console.log(selected);
    if(!selected){
      alert("Please select one criteria.")
    }
  }

  // remove unselected criteria
  chars = chars.filter(x => x.result == true);

  // return an array of objects containing the selected criteria for character selection
  return chars;
}


// randomly generate password based on user criteria
function generatePassword(){
  var length = askLength();
  var chars = askChars();
  console.log(length);
  console.log(chars);

  let password = "";

  for(let i = 0; i < length; i++){
    let randCharArr = chars[(Math.random()*chars.length) | 0].criteria;
    password += randCharArr[(Math.random()*randCharArr.length) | 0];
  }
  console.log(password);

  return password;
}


// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}


// event listener for "Generate Password" button
generateBtn.addEventListener("click", writePassword);
