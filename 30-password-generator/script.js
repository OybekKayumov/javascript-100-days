const empty = "";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
symbol = "!@#$%^&*=-_";

const pwdLength = document.getElementById("p-length");
const upperCase = document.getElementById("p-uppercase");
const lowerCase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");
const copy = document.getElementById("copy");

submit.addEventListener("click", () => {
  let initialPwd = empty;

  // add character if an option is checked
  upperCase.checked ? (initialPwd += uCase) : "";
  lowerCase.checked ? (initialPwd += lCase) : "";
  pNumber.checked ? (initialPwd += number) : "";
  pSymbol.checked ? (initialPwd += symbol) : "";

  password.value = generatePwd(pwdLength.value, initialPwd);
})

function generatePwd(len, initialPwd) {
  let pass = "";

  for (let i = 0; i < len; i++) {
    pass += initialPwd.charAt(
      Math.floor(Math.random() * initialPwd.length)
    );
  }

  return pass;
}

// let str = "Hello";
// let res = str.charAt(0);  // H