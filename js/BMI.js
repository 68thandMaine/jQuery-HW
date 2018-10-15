
var BMI = function (mass, height) {
  return ((mass*703) / (height * height))
}
var mass = parseInt(prompt("How much do you weigh?"));
var height = parseInt(prompt("What is your height "));
var result = BMI (mass, height);
alert(result);
