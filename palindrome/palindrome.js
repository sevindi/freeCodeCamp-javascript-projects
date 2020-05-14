function palindrome(str) {
  str = str.toLowerCase().replace(/[^A-Z0-9]/ig, "");
  let strArr = str.split("");
  for (let i = 0, j = strArr.length - 1; i < strArr.length, j >= 0; i++, j--) {
    if(strArr[i] !== strArr[j]) {
      return false;
    }
  }
  return true;
}



let result = palindrome("almostomla");
//console.log(result);
