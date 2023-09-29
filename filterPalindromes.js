function filterPalindromes(arr) {
    const isPalindrome = (str) => {
      const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
      return cleanedStr === cleanedStr.split("").reverse().join("");
    };
  
    const palindromeArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (isPalindrome(arr[i])) {
        palindromeArray.push(arr[i]);
      }
    }
  
    return palindromeArray;
  }
  