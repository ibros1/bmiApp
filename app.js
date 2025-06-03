const btnEl = document.querySelector(".btn");
const mass = document.querySelector(".weight");
const height = document.querySelector(".height");
const bmiStatus = document.querySelector(".bmiStatus");
const bmiIndex = document.querySelector(".bmiIndex");
const calculateBmi = (e) => {
  const massValue = mass.value;
  const heightValue = height.value;
  e.preventDefault();
  if (massValue === "" && heightValue === "") {
    alert("validating error");
    return;
  }
  if (massValue && heightValue) {
    const massNum = parseFloat(massValue);
    const heightNum = parseFloat(heightValue);
    if (isNaN(massNum) || isNaN(heightNum) || heightNum === 0) {
      alert(
        "Please enter valid numbers for mass and height (height must not be zero)."
      );
      return;
    }

    const result = massNum / (heightNum * heightNum);
    const setValue = localStorage.setItem("bmi", result);
    const getValue = localStorage.getItem("bmi");
    bmiIndex.textContent = parseFloat(getValue).toFixed(2);

    if (result < 16) {
      bmiStatus.textContent = "Severely Underweight";
    } else if (result < 18) {
      bmiStatus.textContent = "Underweight";
    } else if (result < 25) {
      bmiStatus.textContent = "Normal";
    } else if (result < 30) {
      bmiStatus.textContent = "Overweight";
    } else if (result < 35) {
      bmiStatus.textContent = "too Obese";
    } else if (result > 35){
      bmiStatus.textContent = "too too opicity";
    }
    return;
  }

  console.log("clicked");
};

btnEl.addEventListener("click", calculateBmi);

window.addEventListener("DOMContentLoaded", () => {
  const storedData = localStorage.getItem("bmi");
  const result = parseFloat(storedData).toFixed(2);
  if (result < 16) {
    bmiStatus.textContent = "Severely Underweight";
  } else if (result < 18) {
    bmiStatus.textContent = "Underweight";
  } else if (result < 25) {
    bmiStatus.textContent = "Normal";
  } else if (result < 30) {
    bmiStatus.textContent = "Overweight";
  } else if (result < 35) {
    bmiStatus.textContent = "too Obese";
  } else if (result > 35){
      bmiStatus.textContent = "too too opicity";
    } else {
    bmiStatus.textContent = "Generate";
    bmiIndex.textContent = "Generate";
    return;
  }
  bmiIndex.textContent = parseFloat(storedData).toFixed(2);
});
