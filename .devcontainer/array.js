// ********ARRAY****************
  // Arrays can b declared using two ways

// 1st way
let arr = [1 , 2, 3, 4,5];
console.log(arr); // [ 1, 2, 3, 4, 5 ]
arr[1] = 222;
console.log(arr); // [ 1, 222, 3, 4, 5 ] change is reflected


const arr1 = [2,3,54,6,7];
console.log(arr1); //[ 2, 3, 54, 6, 7 ]
arr[1] = 333; 
console.log(arr1);//[ 2, 3, 54, 6, 7 ] change is not reflected because arr1 is const 