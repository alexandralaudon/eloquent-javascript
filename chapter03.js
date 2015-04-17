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

//3.3 Bean Counting:
var letter = 'B';

function countBs(str) {
  count = 0;
  for (var i=0 ; i < str.length ; i++) {
    if (str.charAt(i) === letter) {count++;}
  }
  return count;
}

function countChar(str,input_letter) {
  letter = input_letter;
  return countBs(str);
}
