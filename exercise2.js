/* 2. Which of the below are not giving the right answer? 
        A: addtion
      Why are they not correct?
        A: variable three's and four's values are given as string so operator '+' recognises it is text + text combinator. 
      How can we fix them?
        A: change the string variable to numeric variable.
           addtion = Number(three) + Number(four)
*/

let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
let addition = three + four; // 34
let multiplication = three * four // 12
let division = three / four // 0.75
let subtraction = three - four // -1
let lessThan1 = three < four // true
let lessThan2 = thirty < four //true ** becuase 1. both variables are string 2. 30's first letter 3 is smaller than 4

console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);