// ********ARRAY****************
  // Arrays can b declared using two ways
 
 
  
// 1st way

/*
let arr = [1 , 2, 3, 4,5];
console.log(arr); // [ 1, 2, 3, 4, 5 ]
arr[1] = 222;
console.log(arr); // [ 1, 222, 3, 4, 5 ] change is reflected
*/

/*
const arr1 = [2,3,54,6,7];
console.log(arr1); //[ 2, 3, 54, 6, 7 ]
arr1[1] = 333; 
console.log(arr1);//[ 2, 333, 54, 6, 7 ]  possible because array defined as const can be modefied
const newArr = arr1;
console.log(newArr);
*/

let arr = [1 , 2, 3, 4,5];
const new_arr = [55,6,7,8,89]; 
// 2nd way 
/*
let a = new Array(10,20,30,40,50);
console.log(a);
*/


//********DataType of array*********

/*
const b = [1,2,3];
console.log(typeof(b)); // //The console.log(typeof(b)) statement prints the data type of b, which is "object" because arrays are considered objects in JavaScript.
*/

// ***********Array Methods***********


//********  PUSH AND POP  *********
 /*
arr.push(8);//adds value to the last and returns number of elements in the pushed(arr) array
console.log(arr);//adds value to the last [ 1, 2, 3, 4, 5, 8 ]



arr.pop();//// remves the last valuee
console.log(arr);// [ 1, 2, 3, 4, 5 ] removes 8 which is the last value
 
*/

/****SHFT AND UNSHIFT**************** */

/*
let myarr = arr.unshift(4); //add value to the 0th index in same array( here arr) and returns the new length of the array arr in myarr 
console.log(arr);//[ 444, 1, 2, 3, 4, 5 ]

console.log(myarr);// 6 because unshift returns new length(which is now 6 earlier it was 5) of the array(arr).

arr.shift();//// removes value from the 0th index 
console.log(arr);//[ 1, 2, 3, 4, 5 ] removes 444 which is the first value
*/


/***JOIN*******/

/*
let arr2 = arr.join();// make all values of an array to string
console.log(arr2);//1,2,3,4,5 it isnot in array format
console.log(typeof(arr2));// "string" because join() converts it to string
*/

//****INCLUDES AND INDEXOF*****/
 /*
console.log(arr.includes(10)); //false
console.log(arr.includes(3)); //true 

console.log(arr.indexOf(3));//3

*/

/************  SPLICE ANDA SLICE ********** */
/*
console.log("original array",arr);

let narr = arr.slice()
*/





/*******PUSH ONE ARRAY TO ANATHER **/
/*
const new_arr = [55,6,7,8,89];
arr.push(new_arr);
console.log(arr); // [ 1, 2, 3, 4, 5, [ 55, 6, 7, 8, 89 ] ]

// to access the values

console.log(arr[5]);// [ 55, 6, 7, 8, 89 ] means the new_array becomes the 6th element in the arrray arr

// to access the values of new_arr

console.log(arr[5][0]); // 55
console.log(arr[5][1]); // 6
console.log(arr[5][2]); // 7

*/

/***** concatinating two arrays */

/*
arr.concat(new_arr);// [ 1, 2, 3, 4, 5 ]   returns new array that contains both merged arrays
console.log(arr);// concat does not changes the existing array
console.log(arr.concat(new_arr));

// OUTPUT OF THE ABOVE LINE 
[
  1, 2, 3, 4,  5,
 55, 6, 7, 8, 89
] 

*/



//********** use of '+' operator

/*
console.log(arr + new_arr);// 1,2,3,4,555,6,7,8,89
console.log(typeof(arr + new_arr)); // string because  '+' also concatinates the arrays but converts them in string
*/

//********************  ANOTHER WAY TO ADD MERGE TWO OR MORE ARRAYS--- SPREAD ARRAY ***********************

/*
const a1 = [0,0,0];
const a2 = [1,2,3];
const a3 = [4,5,6];
const  a = [...a1, ...a2];// merges all the arrays
console.log(a); output--> [
  0, 0, 0, 1, 2,
  3, 4, 5, 6
]
console.log(typeof(a)); //obect
*/

//************** ARRAY WITHIN ARRAY**************
/*
const a = [1, 2, 3, [4, 5, 6, [7, 8, 9]], 10, 11 ];
console.log(a);
console.log(typeof(a));// The console.log(typeof(a)) statement prints the data type of a, which is "object" because arrays are considered objects in JavaScript.
*/