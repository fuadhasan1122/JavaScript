function frankenSplice(arr1, arr2, index) {
 
  let result = arr2.slice();

  
  result.splice(index, 0, ...arr1);

  return result;
}
