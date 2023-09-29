function flattenArray(nestedArray) {
    const flattenedArray = [];

    function flatten(arr) {
      arr.forEach(item => {
        if (Array.isArray(item)) {
          flatten(item);
        } else {
          flattenedArray.push(item);
        }
      });
    }

    flatten(nestedArray);
    console.log(flattenedArray);
  }

  flattenArray(nestedArray);