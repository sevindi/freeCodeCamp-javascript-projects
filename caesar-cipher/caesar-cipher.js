function rot13(str) {
  let strArr = str.split("");
  let isAlpha = /[a-zA-Z]/;
  let convertedArr = [];

  for(let i in strArr) {
    if(isAlpha.test(strArr[i])) {
      convertedArr.push(((strArr[i].charCodeAt() - 65 + 13) % 26) + 65);
    } else {
      convertedArr.push(strArr[i].charCodeAt());
    }
  };

  return String.fromCharCode(...convertedArr);
}

let result = rot13("SERR PBQR PNZC");
console.log(result);
