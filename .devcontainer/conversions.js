
/*
let num = "123";
console.log(typeof(num)); //string
console.log(num); //123
*/

 //  CONVERSION OF STRING(which is a number) TO A NUMBER 
/*
let numconverted = Number(num); //conversion of string to number
console.log(typeof(numconverted)); // number
console.log(numconverted); //123
*/

// CONVERSION OF STRING(which is not a number) TO A NUMBER
/*
let num2 = "acb";
console.log(typeof(num2)); //string
console.log(num2); //123
let numconverted2 = Number(num2); //conversion of string to number
console.log(typeof(numconverted2)); // number
console.log(numconverted2); //NaN bcause 123abc is not a number whereas 123(num) is a number in string
*/


 // <--------------- OTHER CONVERSIONS ------------>

 /*
 BOOLEAN AND Number CONVERSIONS
 1 => true
 0 => false

 boolean and string conversion
 "sasds"(any string) => true
""(empty string) => false
*/

/*
let str = "hi";
let str2 = "Javascript";
console.log(str + " " + str2); //normal conversion
*/


// *****************TRICKY CONVERSIONS **********
/*
console.log("1" + 1) //  11
console.log(1 + "1") //  11
console.log("1" + 1 + 1) //  111 BECAUSE js evaluates from left to right and jo data type pahle ata hai usko pahle leta hai here string comes first so srting is taken
console.log(1 + 1 + "1") // 21 because it evaluates first 1+1 which gives 2 then 2+"1" wehich gives 21  
*/


/*
console.log(+true)// 1
console.log(true+)// error
console.log(+""); //0
*/


//  NOTE!!! these all above are not good practices for development







