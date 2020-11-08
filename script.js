// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyToClipboardBtn = document.querySelector("#copy");
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var number = [0,1,2,3,4,5,6,7,8,9];
var special = ['.','/',':',';','<','=','>','?','@','[',']','#','$','%','&','(',')','*','+',',','-'];


function generateCriteria() {
  
  var length = parseInt(prompt("Choose between 8 and 128 characters please"));
    
  if (!length) {
    alert("This needs a value");
  }
  if (length < 8) {
    alert('Password too short!');
    return;
  }
  if (length > 128) {
    alert('Password too long!');
    return;
  }
  
    var includeUppercase = confirm("Include uppercase?");
    var includeLowercase = confirm("Include lowercase?");
    var includeNumber = confirm("Include numbers?");
    var includeSpecial = confirm("Include special character?");
  

    if (!includeUppercase && !includeLowercase && !includeNumber && !includeSpecial) {
      alert("Passwork must contain at least one Uppercase, one Lowercase, one number or one special character");
      return;
    }

    var passwordArray = []; 
    var possibleCharactersArray = []; 

    if (includeUppercase){
      possibleCharactersArray = possibleCharactersArray.concat(uppercase); 
      var randomUpperCase = uppercase[Math.floor(Math.random() * uppercase.length)];
      passwordArray.push(randomUpperCase);
    }

    if (includeLowercase){
      possibleCharactersArray = possibleCharactersArray.concat(lowercase); 
      var randomLowerCase = lowercase[Math.floor(Math.random() * lowercase.length)];
      passwordArray.push(randomLowerCase);
    }

    if (includeNumber){
      possibleCharactersArray = possibleCharactersArray.concat(number); 
      var randomNumber = number[Math.floor(Math.random() * number.length)];
      passwordArray.push(randomNumber);
    }
    if (includeSpecial){
      possibleCharactersArray = possibleCharactersArray.concat(special); 
      var randomSpecial = special[Math.floor(Math.random() * special.length)];
      passwordArray.push(randomSpecial);
    }

    while(passwordArray.length < length){
      var randomCharacter = possibleCharactersArray[Math.floor(Math.random() * possibleCharactersArray.length)];
      passwordArray.push(randomCharacter);
    }


    return passwordArray.join('');

}



    
    // Write password to the #password input
    function writePassword() {
      var password = generateCriteria();
      var passwordText = document.querySelector("#password");
      
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

