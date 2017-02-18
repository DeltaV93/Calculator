function addBtnNumber (num) {
  // find the ul
  var ul = document.getElementById('calc-numbs');
  // create the li
  var li = document.createElement("button");
  // add the number to li
  li.innerHTML=num;
  ul.appendChild(li);
}
for (var i = 9; i > -1; i--) {
  addBtnNumber(i);
}
