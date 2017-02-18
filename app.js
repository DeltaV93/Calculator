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

// Calculate Function
// Turn in a set of number enter before the operations as a singe array
// save set value as array
// save operation 2nd array
// repeat as needed
// do the math when '=' is clicked
// return the number in input
