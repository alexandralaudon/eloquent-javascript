//3.1 Minimum:
  function min(num1, num2) {
    if (num1 === num2) {return NaN;}
    return (num1 > num2) ? num1 : num2;
  }

//3.2 Recursion:
function isEven(num) {
  if (num < 0) {return "??";}
  if (num < 2) {return (num === 0);}
  return isEven(num-2);
}
