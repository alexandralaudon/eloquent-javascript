//2.1:Looping a triangle
	var tri_loop = function() {
    word = ''
    for (var i = 0; i < 7; i++) {
  	  console.log(word+='#');
    }
  }

//2.2: FizzBuzz
  var fizzBuzz = function(){
  	for (var i = 1; i <= 100; i++) {
  		var word = '';
  		if (i%3 === 0) { word += 'Fizz';}
  		if (i%5 === 0) { word += 'Buzz';}
  		console.log(word || i);
  	}
  }
