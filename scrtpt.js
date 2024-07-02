const generatePassword = () => {
   const passValue = document.getElementById("pass").value;
   const charSet ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()+" 
let randomPassword = "";
   for (let i = 0; i < passValue; i++) {
    const randomIndex = Math.round(Math.random() * charSet.length);
   const randomChar = charSet[randomIndex];
   randomPassword += randomChar
   }
   document.getElementById("demo").innerText = randomPassword;
}