let theNumberEntered = document.querySelector("#number");
let theRolls = document.querySelector("#roll");
let showAllRolls = document.querySelector("#Allrolls");
let list = document.querySelector("#resultList");
let totalNumber = document.querySelector("#total");
let resetButon = document.querySelector("#reset");

let dieRoll = [];
theRolls.addEventListener("click", function () {
  let userInputNumber = document.querySelector("#number").value;
  let count = 0;
  let total = 0;

  while (count < userInputNumber) {
    let x = Math.floor(Math.random() * 6) + 1;
    dieRoll.push(x);
    total += dieRoll[count];
    count += 1;
  }
  totalNumber.innerHTML = total;
  console.log(dieRoll);
});

showAllRolls.addEventListener("click", function () {
  result = "<ol>";
  dieRoll.forEach(function (dice) {
    result += "<li>" + dice + "</li>";
  });
  showAllRolls += "</ol>";
  list.innerHTML += result;
});

resetButon.addEventListener("click", function () {
  dieRoll = [];
  list.innerHTML = "";
  totalNumber.innerHTML = "";
  sides = "";
  document.querySelector("#number").value = 0;
});
