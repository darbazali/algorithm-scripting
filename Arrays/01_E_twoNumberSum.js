'use strict'
console.clear()

/*================================================================================
First Solution
Time = O(n^2)
Space = O(1)
=================================================================================*/
const twoNumberSum = (array, targetSum) => {
  // travers the array untill before last element
  const len = array.length
  for (let i = 0; i < len - 1; i++) {
    const current = array[i]
    for (let j = i + 1; j < len; j++) {
      const next = array[j]
      if (current + next === targetSum) {
        return [current, next]
      }
    }
  }

  return []
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))

/*================================================================================
Second Solution - Using Hash Tables
Time = O(n)
Space = O(n)
=================================================================================*/
const twoNumberSum2 = (array, targetSum) => {
  const nums = {}

  for (let num of array) {
    //   target sum = 10 eg.
    //   current number = x
    //   x + y = 10
    //   y = 10 - x

    const potentialMatch = targetSum - num
    if (nums[potentialMatch]) {
      return [potentialMatch, num]
    } else {
      nums[num] = true
    }
  }

  return []
}

/*================================================================================
Second Solution - Sorting the array
Time = O(nlog(n))
Space = O(1)
=================================================================================*/
const twoNumberSum3 = (array, targetSum) => {
  // sort the array
  array.sort((a, b) => a - b)

  // [1, 2, 3, 4, 5, 6]
  //  ^              ^
  //  left           right

  let left = 0
  let right = array.length - 1

  while (left < right) {
    let currentSum = array[left] + array[right]
    if (currentSum === targetSum) {
      return [array[left], array[right]]
    } else if (currentSum < targetSum) {
      left += 1
    } else if (currentSum > targetSum) {
      right -= 1
    }
  }

  return []
}

console.log(twoNumberSum2([3, 5, -4, 8, 11, 1, -1, 6], 10))
console.log(twoNumberSum3([3, 5, -4, 8, 11, 1, -1, 6], 10))
