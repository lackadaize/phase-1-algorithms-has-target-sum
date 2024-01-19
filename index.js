function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
};

/* 
  Write the Big O time complexity of your function here
*/

/* 
if element in array + element in array === target then
    return true
    else return false
*/

/*
  Write a function that takes two arguments - a numerical 'array' and a 'target' number -     which evaluates whether any pair of numbers in the array equals the 'target' number,
  returning true or false depending on the result.  This will involve a for loop iterating over two array variables in addition to the target parameter.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([25, 8, 12, 4, 11, 17, 0], 23));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([25, 8, 12, 4, 11, 17, 0], 2));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  // console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  // console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
