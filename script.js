// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
   const input = window.prompt("how long do you want the pasword")
   const paswlength = parseInt(input)
   if ( isNaN(paswlength)) {
    window.alert("thats not a number")
   } 
   if (paswlength <8 || paswlength > 180){
    window.alert("password must be 8 to 180 of length")
    return
   }
  var wantNumbers = window.confirm("do you want numbers in your password")
  var wantLletter = window.confirm("do you want lowercase letter in your password")
  var wantUleteer = window.confirm("do you want upercase letters in your password")
  var wantsymbol = window.confirm("do you want symbols in your password")
  
  
const numberList = ["0","1",'2',"3","4","5","6","7","8","9"]
const lowercaseList  = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upercaseList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V",'W',"X","Y","Z"]
const symbolsList = ["!","@","#","$","%","^","&","*"]
const cart = []

if (wantNumbers === true){
  cart.push(numberList)
}
if (wantLletter === true){
  cart.push(lowercaseList)
}
if (wantUleteer === true){
  cart.push(upercaseList)
}
if (wantsymbol === true){
  cart.push(symbolsList)
}

let generatePssword = ""

for (var i = 0; i < paswlength; i++ ){
const randomlist = getrandomitom(cart)
var randomChar = getrandomitom(randomlist)
 generatePssword += randomChar 
console.log(generatePssword)
}
return generatePssword

}


function randumInt(min, max){
  if(!max){
    max = min
    min =0
  }
  const rand = Math.random()

return Math.floor(min*(1 - rand) + rand*max)
}

function getrandomitom(list){
  return list[randumInt(list.length)]

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
