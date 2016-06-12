/**
 * Insertion sort is a basic sorting algorithm.
 *
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 *
 * Insertion sort should be implemented as a stable sort. This means that equal elements
 * should retain their relative order. Numbers, as primitives, give us no way to check this,
 * so we'll be sorting objects with a value field, on which they will be sorted, like so:
 *
 * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
 *
 * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
 *
 **/

// first method
var insertionSort = function (array){
  for (var i = 1; i<array.length;i++){
    var value = array[i];
    var idx = i;
    while (idx > 0 && val < array[i-1]){
      array[i] = array[i-1];
      idx--;
    }
    array[idx] = value;
  }
};

// second method
var insertionSort2 = function (array){
  var current, i, j;

  for (i = 0; i < array.length){
    temp = array[i];
      for (j = i - 1; j > 0 && array[j]>temp; j--){
        array[j+1] = array[j];
      }
      array[j+1] = temp;
    }

    return array;
}