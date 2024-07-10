"use strict";
//  Logical Operator
let Budget = 600000;
let haveGirl = true;
//    false         &&        true      =         False  
console.log(Budget >= 1000000 && haveGirl == true);
//       true       &&         true      =         true  
console.log(Budget >= 600000 && haveGirl == true);
// && Operator
let budget = 600000;
let HaveGirl = true;
let result = budget >= 600000 && HaveGirl == true;
console.log(result);
// || Operator
let haveDegree = "yes";
let isHamzasStd = "no";
//       true       ||            false     =       true
let answer = haveDegree == "yes" || isHamzasStd == "yes";
console.log(answer);
// ! Operator
let num1 = 10;
let output = !(num1 < 16);
console.log(output);
