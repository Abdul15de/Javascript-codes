const a = 123;
var b = 222;
let c = "111";
  
// a = 123; // not possible because contant values canaot be changed or redeclared

//BOTH VAR AND LET AN BE CHANGED BUT PREFER LET ALWAYS
b = 112;
console.log(b);
// let b = 111;
// console.log(b);//error because vairable declared using let can be changed but cannnot be redclared. 

c = 111;
console.log(c);
// var c = 555;
// console.log(c);// var also cannot be redclared.
// the difference between var and let is that of block;

n = 123;
console.log(n); // possible but is a bad practice.
