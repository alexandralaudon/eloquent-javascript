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
    return Math.round(average(ageArray)*10)/10;
  }

  console.log(motherAgeArray());

//5.3 Historical Life Expectancy

  function average(array) {
    function plus(a, b) { return a + b; }
    var averageNum = array.reduce(plus) / array.length;
    return Math.round(averageNum*10)/10;
  }

  // Your code here.
  function age(person){
    return person.died - person.born;
  }

  function groupBy(centuries, century, age) {
    if (centuries.hasOwnProperty(century)) {
      centuries[century].push(age);
    } else {
      centuries[century] = [age];
    }
  }

  function ancestryCentury(){
    var centuriesAll = {};
    var centuriesAvg = {};
    for (var i = 0 ; i < ancestry.length ; i++){
      var century = Math.ceil(ancestry[i].died/100);
      groupBy(centuriesAll, century, age(ancestry[i]));
    }

    for (properties in centuriesAll) {
       centuriesAvg[properties] = average(centuriesAll[properties]);
    }
    return centuriesAvg;
  }

  console.log(ancestryCentury());


//5.4 Every and Then Some
  function some(array, evaluation){
    for(var i = 0; i < array.length; i++){
      if (evaluation(array[i])) {return true;}
    }
    return false;
  }

  function every(array, evaluation){
    for(var i = 0; i < array.length; i++){
      if (!evaluation(array[i])) {return false;}
    }
    return true;
  }
