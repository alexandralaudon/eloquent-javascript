//2.1:Looping a triangle
  var limit = 8;
  for (var word = "#"; limit > word.length ; word += "#") {
	  console.log(word);
  }

//2.2: FizzBuzz
	for (var i = 1; i <= 100; i++) {
		var word = '';
		if (i%3 === 0) {
      word += 'Fizz';
    }
		if (i%5 === 0) {
      word += 'Buzz';
    }
		console.log(word || i);
	}
//2.3 Chessboard
	var chessboard = "";
	var size = 8;
	for (var x = 0; x < size; x++){
	  for (var y = 0; y < size; y++) {
	    if ((x+y)%2===0){chessboard += " ";}
	    else {chessboard += "#";}
	  }
	  chessboard += "\n";
	}

	console.log(chessboard);
