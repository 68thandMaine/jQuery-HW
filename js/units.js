var liquid = function (cups) {
  return (cups * 48)
}

var cups = parseInt(prompt("How many cups do you need?"));

var teaspoon = liquid(cups);
alert(teaspoon);
