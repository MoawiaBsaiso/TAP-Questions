function twoSum(nums, target) {
  const numMap = {};

  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];

      if (complement in numMap) {
          return [numMap[complement], i];
      }

      numMap[nums[i]] = i;
  }

  return [];
}

// Example :
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);


  /* second solution by nested loop */
  // function twoSum(nums, target) {
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i + 1; j < nums.length; j++) {
  //       if (nums[i] + nums[j] === target) {
  //         return [i, j];
  //       }
  //     }
  //   }
  //   return [];
  // }