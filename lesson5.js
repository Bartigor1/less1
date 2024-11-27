// ***** Функции
// function exampleFunc() {
//     console.log('Hello World!');
// }

// exampleFunc()

// const a = 10;
// const b = 5;
// // console.log(a + b)

// const sumOfElements = (x, y) => {
//     return x + y
// }
// console.log(sumOfElements(a, b));


// найти сумму
// 123 => 6
// const sumOfNumber = (num) => {
//     let sum = 0;
//     while (num >0) {
//     sum += num % 10; //3
//     num = Math.floor(num / 10;) //12
// }
// return sum

// }
// console.log(sum);

//сумму цифр числа
// 123 => 6

// //-----------
// const sumOfNumber = (num) => {
//     if (typeof num !== "number") {
//       return "uncorrect argument";
//     }
  
//     let sum = 0;
  
//     while (num > 0) {
//       sum += num % 10; // sum = sum + 3
//       num = Math.floor(num / 10); // num / 10 = 12.3 => 12 => num = 12
//     }
  
//     return sum;
//   };
//---------------

// поиск максимального числа
// const a = 7;
// const b = 10;
// const c = 15;

// const maxNumber = (firstNumb, secondNumb, third) => {
//     if(
//         typeof firstNumb !==
//     )
// }

//поиск максимального числа из трех

// const maxNumber = (firstNumb, secondNum, thirdNum) => {
//     if (
//       typeof firstNumb !== "number" ||
//       typeof secondNum !== "number" ||
//       typeof thirdNum !== "number"
//     ) {
//       return "uncorrect arg";
//     }
  
//     let max = firstNumb;
  
//     if (max < secondNum) {
//       max = secondNum;
//     }
  
//     if (max < thirdNum) {
//       max = thirdNum;
//     }
  
//     return max;
//   };


//___________________
//Функция поторая в обратном порядке

// const reverseString = strArg => {
//     return (typeof strArg !== 'string' || strArg.length < 1) {
//         console.log('uncorrect');
//     } 
//     let result = '';



//     return result;
// }
// console.log(reverseString('hello');

//написать функцию которая принимает строку и возвращает ее в обратном порядке
// const reverseString = (strArg) => {
//     if (typeof strArg !== "string" || strArg.length < 1) {
//       return "uncorrect argument";
//     }
  
//     let result = "";
  
//     for (let i = strArg.length - 1; i >= 0; i--) {
//       result += strArg[i];
//     }
  
//     return result;
//   };

//   console.log(reverseString('helLo people'));


//функцию которая принимает строчку и проверяет является ли она палиндромом
// madam => true
// hello => false

// function isPalindrome(str) {
//     if (typeof str !== "string" || str.length < 1) {
//       return "uncorrect argument";
//     }
  
//     let result = "";
  
//     for (let i = str.length - 1; i >= 0; i--) {
//       result += str[i];
//     }
  
//     return result === str;
//   }

//   const a isPalindrome
//   .....