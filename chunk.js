const chunkArray = (arr, len) => {
  const chunkedArr = [];
  arr.forEach(val => {
    const last = chunkedArr[chunkedArr.length - 1];
    console.log(last, "last")
    if (!last || last.length === len) {
      if (last && last.length === len) {
        console.log(last.length, "length")
      }
      chunkedArr.push([val]);
      console.log(val, "val")
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
}

function test() {
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const len = 3;
  const chunkedArr = chunkArray(numbers, len);
  return chunkedArr
}

console.log(test())

module.exports = chunkArray;