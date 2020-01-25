// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var specialCharacters = ["!", "@", "#", "$", "%", "&", "*"];
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  var passLength = parseInt(prompt("How long is your password? (8-128 Charaters)"));
  console.log(passLength);

  
  var includeLower = confirm("Do you want lowercase letters? (OK(Y) or cancel(N))");
  var includeUpper = confirm("Do you want Uppercase letters? (OK(Y) or cancel(N)");
  var includeSpecial = confirm("Do you want special characters? (OK(Y) or cancel(N)");
  var includeNumer = confirm("Do you want numbers? (OK(Y) or cancel(N)");
 
  var arr = []
  for (i=0; i<passLength;i++){
    
    if (includeLower === true) {
      arr.push(lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]);
      console.log(lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)])
      console.log(arr);
    }
    if (includeUpper === true) {
      arr.push(uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]);
    }
    if (includeSpecial === true) {
      arr.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
      console.log(arr);
    }
    if (includeNumer === true) {
      arr.push(numbers[Math.floor(Math.random() * numbers.length)]);
      console.log(arr);
    }

  }
  console.log(arr);
  console.log(arr.join(""));

  var pwd = arr.join("");
  console.log(pwd)
  return pwd;
  

}
