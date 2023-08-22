const element = document.getElementById("count1");
const elementString = element.innerText;
var elementStringToNumber = parseInt(elementString);
document.getElementById("btn-inc1").addEventListener("click", function () {
  if (elementStringToNumber === 33) {
    return alert("You're Done Go to the Next One!");
  }
  document.getElementById("count1").innerText = elementStringToNumber += 1;
});
document.getElementById("btn-dec1").addEventListener("click", function () {
  if (elementStringToNumber <= 0) {
    return alert("You're Done Go to the Next One!");
  }
  document.getElementById("count1").innerText = elementStringToNumber -= 1;
});

const element2 = document.getElementById("count2");
const elementString2 = element.innerText;
var elementStringToNumber2 = parseInt(elementString);
document.getElementById("btn-inc2").addEventListener("click", function () {
  if (elementStringToNumber2 === 33) {
    return alert("You're Done Go to the Next One!");
  }
  document.getElementById("count2").innerText = elementStringToNumber2 += 1;
});
document.getElementById("btn-dec2").addEventListener("click", function () {
  if (elementStringToNumber2 <= 0) {
    return alert("You're Done Go to the Next One!");
  }
  document.getElementById("count2").innerText = elementStringToNumber2 -= 1;
});

const element3 = document.getElementById("count1");
const elementString3 = element.innerText;
var elementStringToNumber3 = parseInt(elementString);
document.getElementById("btn-inc3").addEventListener("click", function () {
  if (elementStringToNumber3 === 33) {
    return alert("You're Done Go to the Next One!");
  }
  document.getElementById("count3").innerText = elementStringToNumber3 += 1;
});
document.getElementById("btn-dec3").addEventListener("click", function () {
  if (elementStringToNumber3 <= 0) {
    return alert("You're Done Go to the Next One!");
  }
  document.getElementById("count3").innerText = elementStringToNumber3 -= 1;
});

document.getElementById("reset-btn").addEventListener("click", function () {
  document.getElementById("count1").innerText = 0;
  elementStringToNumber = 0;

  document.getElementById("count2").innerText = 0;
  elementStringToNumber2 = 0;
  document.getElementById("count3").innerText = 0;
  elementStringToNumber3 = 0;
});
