//5.1 Flattening
  var arrays = [[1, 2, 3], [4, 5], [6]];
  // Your code here.
  console.log(arrays.reduce(function(all, next){
  	return all.concat(next);
  }));
