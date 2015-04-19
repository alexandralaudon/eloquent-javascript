//5.1 Flattening
  var arrays = [[1, 2, 3], [4, 5], [6]];
  // Your code here.
  console.log(arrays.reduce(function(all, next){
  	return all.concat(next);
  }));

//5.2 Mother-Child Age Difference
  function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
  }

  var byName = {};
  ancestry.forEach(function(person) {
    byName[person.name] = person;
  });

  // Your code here.
  function ageDifference(person){
    if (byName[person.mother] == undefined) {return undefined;}
    return Math.abs(person.born - byName[person.mother].born);
  }

  function motherAgeArray(){
    var ageArray = [];
    for (var i = 0; i < ancestry.length; i++){
       var short_term = ageDifference(ancestry[i]);
       if (short_term !== undefined) {ageArray.push(short_term);}
    }
    return average(ageArray);
  }

  console.log(motherAgeArray());
