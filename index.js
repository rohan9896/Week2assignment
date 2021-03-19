const arr = [1,2,3,4,5,6];

/* (a)Sum of all odd numbers */
const sumOfOdd = (arr) => arr.reduce((sum, current) => current%2 !== 0 ? sum+current : sum)

console.log(sumOfOdd(arr));

/* (b)Sum of all nums at odd indices */
// const sumOfOddIdxNums = (arr) => arr.reduce((sum, current, index) => index%2 !== 0 ? sum+current : sum)

// console.log(sumOfOddIdxNums(arr))

const sumOfOddIdxNums2 = (arr) => {
  let sum = 0;
  for(let i=1;i<arr.length;i+=2){
    sum += arr[i];
  }
  return sum;
}
console.log(sumOfOddIdxNums2(arr))

/* (C)Biggest num in array */
const biggestInArr = (arr) => {
  let biggest = Number.NEGATIVE_INFINITY;
  for(let num of arr){
    num > biggest ? biggest = num : biggest = biggest;
  }
  return biggest;
}

console.log(biggestInArr(arr))

const arr2 = [20,3,25,50,10,1,23];

/* num divisible by 10 */
const isDivisibleBy10 = (arr) => arr.filter(num => num%10 === 0)

console.log(isDivisibleBy10(arr2));

/* return an array of num where odds are incremented by one and evens are decremented by one */
const oddIncreEvenDecre = (arr) => arr.map(num => num%2 === 0 ? num-1 : num+1 );

console.log(oddIncreEvenDecre(arr))

/* obj with even and odd sums */
const evenOddSumObj = (arr) => {
  let obj = {evenSum: 0, oddSum: 0};
  arr.forEach(num => num%2 === 0 ? obj.evenSum+=num : obj.oddSum+=num);
  return obj;
}

console.log(evenOddSumObj(arr))

const arr3 = ["apple", "orange", "mango", "papaya"];

/* obj of no of string with similiar num of chars */
const similiarNumOfCharsObj = (arr) => {
  let obj = {};
  for(let element of arr){
    let lengthOfElement = element.length;
    if(lengthOfElement in obj){
      obj[lengthOfElement] += 1; 
    }else {
      obj[lengthOfElement] = 1;
    }
  }
  return obj;
}

console.log(similiarNumOfCharsObj(arr3));

const arr4 = ["qazxsw", "qwrty", "mlpjkl", "ioaqw"];

const vowels = ['a', 'e', 'i', 'o', 'u'];
/* ruturn an array of strings which have vowels */

const hasVowel = str => {
  let flag = false;
  for(let ch of str) {
    vowels.includes(ch) ? flag = true : flag;
    if(flag) return flag
  }
  return flag;
}

const arrOfVowelStr = arr => arr.filter(num => hasVowel(num));

console.log(arrOfVowelStr(arr4))

/* arr with key as item and value as num of chars */
const keyItemNumOfCharsVal = arr => {
  let obj = {};
  for(let item of arr) {
    obj[item] = item.length;
  }
  return obj;
}

console.log(keyItemNumOfCharsVal(arr3))




