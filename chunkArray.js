function chunkArray(arr, chunkSize) {
    const chunkedArray = [];
    let index = 0;
  
    while (index < arr.length) {
      chunkedArray.push(arr.slice(index, index + chunkSize));
      index += chunkSize;
    }
  
    console.log(chunkedArray);
  }
  
  chunkArray(originalArray, chunkSize);
  