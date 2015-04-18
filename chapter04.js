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

// 4.2 Reversing an Array
// I would argue reverseArray is faster because you only check the fwd_array.length
// once when you declare i.  The other way (that I initially tried) required a
// check every time you loop.
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
  function arrayToList(numbers_array) {
    var list = {};
    var value = "value";
    var rest = "rest";

    if (numbers_array.length > 1) {
      for (var i = numbers_array.length; i > 1; i--) {
        list[value] = numbers_array.shift();
        list[rest] = arrayToList(numbers_array);
      }
    } else {
      list[value] = numbers_array.shift();
      list[rest] = null;
    }
    return list;
  }

//4.4 Deep Comparison
  function deepEqual(value1, value2) {
    if (value1 === value2) {return true;}
    if (typeof(value1) == typeof(value2)) {return true;};
    return false;
  }
