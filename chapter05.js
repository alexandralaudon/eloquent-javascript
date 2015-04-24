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
  var ageDifference = function(person){
    if (byName[person.mother] == undefined) {return undefined;}
    return Math.abs(person.born - byName[person.mother].born);
  };

  var motherAgeArray = function(){
    var ageArray = [];
    for (var i = 0; i < ancestry.length; i++){
       var short_term = ageDifference(ancestry[i]);
       if (short_term !== undefined) {ageArray.push(short_term);}
    }
    return Math.round(average(ageArray)*10)/10;
  };

  console.log(motherAgeArray());

//5.3 Historical Life Expectancy
  var ancestry = JSON.parse(ANCESTRY_FILE);

  function average(array) {
    function plus(a, b) { return a + b; }
      return Math.round((array.reduce(plus) / array.length)*10)/10;
  }

  var age = function(person){
    return person.died - person.born;
  };

  var groupBy = function(centuries, century, age) {
    if (centuries.hasOwnProperty(century)) {
      centuries[century].push(age);
    } else {
      centuries[century] = [age];
    }
  };

  var avgCenturies = function(centeriesArray){
    centeriesAvg = {};
    for (var properties in centeriesArray) {
      centuriesAvg[properties] = average(centuriesAll[properties]);
    }
    return centeriesAvg;
  };

  var ancestryCentury = function(){
    var centuriesAll = {};
    for (var i = 0 ; i < ancestry.length ; i++){
      var century = Math.ceil(ancestry[i].died/100);
      groupBy(centuriesAll, century, age(ancestry[i]));
    }
    return avgCenturies(centuriesAll);
  };

  console.log(ancestryCentury());


//5.4 Every and Then Some
  var some = function(array, evaluation){
    for(var i = 0; i < array.length; i++){
      if (evaluation(array[i])) {return true;}
    }
    return false;
  };

  var every = function(array, evaluation){
    for(var i = 0; i < array.length; i++){
      if (!evaluation(array[i])) {return false;}
    }
    return true;
  };
