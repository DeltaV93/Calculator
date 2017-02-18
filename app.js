function addBtnNumber (num) {
  // find the div
  var numDiv = document.getElementById('calc-numbs');
  // create the btn
  var btns = document.createElement("button");
  // add the number to btns
  btns.innerHTML=num;
  numDiv.appendChild(btns);
}
for (var i = 9; i > -1; i--) {
  addBtnNumber(i);
}
