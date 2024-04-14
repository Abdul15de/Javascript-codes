// **************  OBJECTS********************


// ******Object creation********



const user = { 
    name: "Abdullah", // key name can also be written as "name" because name key is taken as string
    email: "abdun9de",
    course: "btech",
    "full name": "Abdullah Siddqui"
    
};
/*
console.log(user);// Otuput

// {
//   name: 'Abdullah',
//   email: 'abdun9de',
//   course: 'btech',
//   'full name': 'Abdullah Siddqui'
// }


user["name"] = "Ali"; 
console.log(user); // OUTPUT after changing name from Adullah to Ali
//   {
//     name: 'Ali',
//     email: 'abdun9de',
//     course: 'btech',
//     'full name': 'Abdullah Siddqui'
//   } 

// to access elements of objects



console.log(user.name); // Abdullah
console.log(user["name"]); //Abdullah
// both output is same but it 2nd one is best practice
console.log(user["full name"]);

*/

//  ***freezing elements of objects
/*
user["name"] = "Ali";
console.log(user) // output before freezing
Object.freeze(user);
// {
//     name: 'Ali',
//     email: 'abdun9de',
//     course: 'btech',
//     'full name': 'Abdullah Siddqui'
//   }
*/

// **********  FUNCTIONS IN OBJECTS*********

let stu = {
    name: "abc",
    course: "aaa",
    year: "first",
    grade: function() // function without returning any value
    {
        console.log("A");

    },

    add: function() // function returning value
    {
        let a= 10;
        let b =10;
        return `${a+b} ${this.name}`; // this keyword is used to access the key of current object 

    }




};

console.log(stu.grade); //[Function: grade] The output of console.log(stu.grade) would be a representation of the grade method itself, not its execution. In JavaScript, when you access a method without calling it (i.e., not using parentheses ()), you get a reference to the method itself, rather than its return value.

console.log(stu.grade()); // A undefined <- output now its output will be A because '()' is used but undefined is also coming because function has not returned any value


console.log(stu.add()); // 20 abc is te output and undefined is also not coming because return is there. 

