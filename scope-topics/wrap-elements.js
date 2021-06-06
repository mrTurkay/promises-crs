// function wrapElements(a) {
//   var result = [],
//     i,
//     n;

//   for (i = 0, n = a.length; i < a.length; i++) {
//     result[i] = function () {
//       return a[i];
//     };
//   }

//   // result[5] = function(){return undefined}
//   // result[5] = function(){return 20}

//   return result;
// }

// var wrapped = wrapElements([10, 20, 30, 40, 50]);
// var f = wrapped[0];
// console.log(f());

// // ---------------- çözüm 2

// function wrapElements(a) {
//   var result = [],
//     i,
//     n;

//   for (i = 0, n = a.length; i < a.length; i++) {
//     // 10
//     // result[0] = function(){return 10}
//     // result[1] = function(){return 20}
//     // immediately invoked function expression // iife
//     (function (j) {
//       result[j] = function () {
//         return a[j];
//       };
//     })(i);
//   }

//   return result;
// }

// var wrapped = wrapElements([10, 20, 30, 40, 50]);
// var f = wrapped[0];
// console.log(f());

// //  --------------------çözüm 3

// function wrapElements(a) {
//   var result = [],
//     i,
//     n;

//   for (let i = 0, n = a.length; i < a.length; i++) {
//     result[i] = function () {
//       return a[i];
//     };
//   }

//   return result;
// }

// var wrapped = wrapElements([10, 20, 30, 40, 50]);
// var f = wrapped[0];
// console.log(f());

//

//     (function (j) {
//       result[j] = function () {
//         return a[j];
//       };
//     })(i);


for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function () {
      return console.log(j);
    }, 0);
  })(i);
}
