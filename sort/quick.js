function quickSort(array) {
    console.log(array);
    if (array.length <= 1) {
      return array;
    }
  
    const pivot = array[array.length - 1];
    const left = [];
    const right = [];
  
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
console.log(quickSort([1,20,44,11,9]));
