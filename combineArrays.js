function combineArrays(arr1, arr2) {
    const combinedArray = [...new Set([...arr1, ...arr2])];
    console.log(combinedArray);
  }
  
  