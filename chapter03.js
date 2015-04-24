//3.1 Minimum:
  function min(num1, num2) {
    if (num1 === num2) {return NaN;}
    return (num1 > num2) ? num2 : num1;
  }

  console.log(min(0, 10));
  console.log(min(0, -10));

//3.2 Recursion:
  function isEven(num) {
    if (num < 0) {num = num*-1;}
    if (num < 2) {return (num === 0);}
    return isEven(num-2);
  }

  console.log(isEven(50));
  console.log(isEven(75));
  console.log(isEven(-1));

//3.3 Bean Counting:
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

  var letter = 'B';
  console.log(countBs("BBC"));
  console.log(countChar("kakkerlak", "k"));
