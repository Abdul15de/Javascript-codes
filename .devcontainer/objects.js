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

user["name"] = "Ali";
console.log(user) // output before freezing
Object.freeze(user);
// {
//     name: 'Ali',
//     email: 'abdun9de',
//     course: 'btech',
//     'full name': 'Abdullah Siddqui'
//   }


