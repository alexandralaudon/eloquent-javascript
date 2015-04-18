// 4.1 The Sum of a Range
function range(start, end, step) {
  var map = [];
  if (start === end) {return NaN;}

  if (start < end) {
    var step_value = (step) ? step: 1 ;
    for (var i = start ; i < (end+step_value); i += step_value) {
      map.push(i);
    }
  } else if (start > end) {
    var step_value = (step) ? step: -1 ;
    for (var i = start ; i > (end+step_value); i += step_value){
      map.push(i);
    }
  }
  return map;
}

function sum(range){
  var sum = 0;
  for (var i = 0 ; i < range.length ; i++){
    sum += range[i];
  }
  return sum;
}


// This is my second try at 4.1
function step_function(start, end, step) {
  if (step) {return step;}
  else if (start < end) {return 1;}
  else {return -1;}
}

function create_array(start, end, step) {
  var map = [];
  var step_value = step_function(start, end, step);
  
  if (start < end) {
    for (var i = start ; i < (end+1); i += step_value) {
      map.push(i);
    }
  } else if (start > end) {
    for (var i = start ; i > (end-1); i += step_value){
      map.push(i);
    }
  }
  return map;
}

function range(start, end, step) {
  if (start === end) {return NaN;}
  return create_array(start,end,step);
}

function sum(range){
  var sum = 0;
  for (var i = 0 ; i < range.length ; i++){
    sum += range[i];
  }
  return sum;
}
