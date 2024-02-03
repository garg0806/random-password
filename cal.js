const passwordBox=document.getElementById("Password");
const length = 12;
const upperCase="QWERTYUIOPLKJHGFDSAZXCVBNM";
const lowerCase="qazxswedcvfrtgbnhyujmkiolp";
const symbol="!@#$%^&*()[]\,.?";
const number="0123456789";
const allChar=upperCase+lowerCase+symbol+number;

function createPassword(){
    let Password=" ";
    Password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    Password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    Password+=symbol[Math.floor(Math.random()*symbol.length)];
    Password+=number[Math.floor(Math.random()*number.length)];
    while(length>Password.length){
        Password+=allChar[Math.floor(Math.random()*allChar.length)];
    }
    passwordBox.value=Password;

}