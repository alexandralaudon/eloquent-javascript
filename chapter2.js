//2.1:Looping a triangle
	var triangle_loop = function() {
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

//2.3 Chessboard
	var chessboard = function() {
    var size = 8;
  	for (var i = 0; i < size; i++) {
  	     row = '# '.repeat(size)
  	     if (i%2 === 0) {console.log(' ' + row);}
  	     else console.log(row);
  	}
  }
