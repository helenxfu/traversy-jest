function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

//helper function
function formatStr(str) {
  // str.replace(/[^\w]/g, '') replaces everything not \w !!!! 
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
formatStr("HELLO world")
console.log(formatStr("HELLO world!!!!!!"))

module.exports = isAnagram;
