// BMI - kg/m2
// Normal - 18.5 -24.9
// Underweight - < 18.5
// Overweight -  25 - 29.9
// Obese -  30 and above

const btn = document.querySelector(".btn"),
  result = document.querySelector(".result"),
  reset = document.querySelector(".reset");

btn.addEventListener("click", calculateBMI);

function calculateBMI(e) {
  e.preventDefault();

  let height = document.querySelector(".height").value;
  let weight = document.querySelector(".weight").value;

  if (height === "" || isNaN(height)) {
    return (result.innerHTML = "Provide a valid Height");
  } else if (weight == "" || isNaN(weight)) {
    return (result.innerHTML = "Provide a valid Height");
  } else {
    height = height / 100
    let bmi = (weight / Math.pow(height, 2))
  }
}