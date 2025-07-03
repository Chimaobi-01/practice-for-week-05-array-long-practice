

const findMinimum = arr => {

  let min = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min)
      min = arr[i]
  }
  return min
};

const runningSum = arr => {

  let run = 0
  let res = []
  for (let i = 0; i < arr.length; i++) {
    run += arr[i]
    res.push(run)
  }
  return res
};

const evenNumOfChars = arr => {

  let total = 0
  for (let i = 0; i < arr.length; i++) {
    let strLength = arr[i].length
    if (strLength % 2 === 0)
      total++
  }
  return total
};

const smallerThanCurr = arr => {

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
};

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    
    for (let j = 0; j < arr.length; j++) {
      
      if(j != i){
        let num1 = arr[i]
        let num2 = arr[j]
        let sum = num1 + num2
        if(sum === target)
          return true
      }
    }
  }
  return false
};

const secondLargest = arr => {
  if(arr.length < 2)
    return undefined 

  let secLargest = 0

  for (let i = 0; i < arr.length - 1; i++) {
    let num1 = arr[i]
    let num2 = arr[i+1]
    if(num1 <= num2 && num1 > secLargest){
      secLargest = num1
    }else if(num2 <= num1 && num2 > secLargest){
      secLargest = num2
    }
  }

  return secLargest

};

const shuffle = (arr) => {
  // Create a copy of the original array to avoid mutation
  const shuffled = [...arr];

  // Fisher-Yates (Knuth) shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
    // Swap elements at i and j
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];