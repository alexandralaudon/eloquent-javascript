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

    // the other if statement could be (step_value >=0, depending on how we structure other potential parameters)
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

// This is my third try at 4.1
  function step_function(start, end, step) {
    if (step) {return step;}
    else if (start < end) {return 1;}
    else {return -1;}
  }

  function negOrPosCondition(end, step_value) {
    return (step_value > 0) ? end+1 : end-1;
  }

  function range(start, end, step) {
    if (start === end || step === 0) {return NaN;}
    var map = [];
    var step_value = step_function(start, end, step);
    var step_condition = negOrPosCondition(end, step_value);
    var i = start;

    if (step_value > 0) {
      while (i < step_condition){
        map.push(i);
        i+= step_value;
      }
    }else {
      while(i > step_condition){
        map.push(i);
        i+= step_value;
      }
    }
    return map;
  }

  function sum(range){
    var total = 0;
    for (var i = 0 ; i < range.length ; i++){
      total += range[i];
    }
    return total;
  }


// 4.2 Reversing an Array
// I would argue that reverseArrayInPlace takes a shorter time because the for loop only iterates
// half the time compared to reverseArray, which iterates through all elements in an array.
  function reverseArray(fwd_array) {
    backwards_array = [];
    for (var i = fwd_array.length-1 ; i >= 0 ; i--) {
      backwards_array.push(fwd_array[i]);
    }
    return backwards_array;
  }

  function reverseArrayInPlace(same_array) {
    for (i = 0; i < Math.floor(same_array.length/2); i++) {
      var swap_back = same_array[i];
      var swap_back_index = same_array.length-(i+1);
      var swap_forward = same_array[swap_back_index];

      same_array[i] = swap_forward;
      same_array[swap_back_index] = swap_back;
    }
    return same_array;
  }

//4.3 A List
  function prepend(value, rest){
    return {value: value, rest: rest};
  }

  function arrayToList(numbers_array) {
    var list = prepend(numbers_array.pop(), null);
    for(var i = 0; i < numbers_array.length+1; i++) {
      list = prepend(numbers_array.pop(),list);
    }
    return list;
  }

  function listToArray(list){
    var arr = [];
    while (list !== null){
      arr.push(list.value);
      list = list.rest;
    }
    return arr;
  }

  function nth(list,num){
    for(var i = 0; i !== num; i++) {
      list = list.rest;
    }
    return list.value;
  }


//4.4 Deep Comparison
  function deepEqual(value1, value2) {
    if (value1 === value2) {return true;}
    if (value1 == null || value2 == null) {return false;}

    if (typeof value1 === 'object' || typeof value2 === 'object') {
      if (Object.keys(value1).length !== Object.keys(value2).length) {return false;}
      for (var i in value1) {
        if (!deepEqual(value1[i], value2[i])) {return false;}
      }
      return true;
    }
    return false;
  }
