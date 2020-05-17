function telephoneCheck(str) {
  let allRegexes = [
    /^\d{3}-\d{3}-\d{4}$/,
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^\d{10}$/,
    /^1?\(\d{3}\)\d{3}-\d{4}/,
    /^1 \d{3} \d{3} \d{4}$/
  ];

  return allRegexes.some((check => check.test(str)))
}

let result = telephoneCheck("555-555-5555");
console.log(result);
