//*******  MORE on OBJECTS */

/*
// sinleton objects 
const user = new Object();
console.log(user); // {} output is empty object

const user2 = {}; // non singleton objects
console.log(user2); // {} it soutput is also empty object

// both object creatin method creates same output but the difference is that one is soingleton and other is non sngleton and that of instance(not cleraly known)

// creating keys and valuses of non singleton object 'user'

user.rollnumber = 200472010001;
user.course = "btech";
 console.log(user) // { rollnumber: 200472010001, course: 'btech' }

*/
 // ****NESTED OBJECTS(objects within objects)

 /*
 const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
console.log(regularUser.email);// some@gmail.com
console.log(regularUser.fullname); // { userfullname: { firstname: 'hitesh', lastname: 'choudhary' } }
console.log(regularUser.fullname.userfullname); // { firstname: 'hitesh', lastname: 'choudhary' }
console.log(regularUser.fullname.userfullname.firstname); // hitesh

*/

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj = {obj1 , obj2 }
// console.log(obj); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } } output will be object in object 

/// **** ASSIGN IN OBJECTS


//const obj = Object.assign(obj1,obj2);
//console.log(obj);// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } assigns object 1 and 2 to obj
//console.log(obj1);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' } also assigns value to obj1 also

/*
const o = Object.assign({},obj1,obj2); // another way to asign // best practice
console.log(o);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj1);// { '1': 'a', '2': 'b' } // Adding {} to the assign will assign all the objects(obj1,obj2) to only the new object(o) and not to obj1
*/

// ****MOSTLY USED IS SPREAD *********

/*
const obj = {...obj1, ...obj2};
console.log(obj); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
*/


// *****TO ACCESS VALUE FROM ARRAY OF OJECTS****


/*
const arrayOfobjects = // array of objects
[
    { // first object
        id: "001",
        name: "a"
    },
    { // Second object
        id: "002",
        name: "b"
    }, 
    { // Third Object
        id: "003",
        name: "c"
    },
]
    
// to access them 

console.log(arrayOfobjects[1].name); // b
console.log(arrayOfobjects[0].name); // a
console.log(arrayOfobjects[2].name); // c
console.log(arrayOfobjects[1].id); // 002

*/

//   ******** how to get all the keys,values and entries of an object******

const user = {
    id: "1",
    name: "abdullah"
};


/*
console.log(Object.keys(user)); // [ 'id', 'name' ]
console.log(Object.values(user)); //  [ '1', 'abdullah' ]
console.log(Object.entries(user)); //  [ [ 'id', '1' ], [ 'name', 'abdullah' ] ]
*/

// In above all are in arrays

/*
console.log(user.hasOwnProperty('name')); // true
console.log(user.hasOwnProperty('abdullah')); // false because it is only for keys not values
console.log(user.hasOwnProperty('course')); // false
console.log(user.hasOwnProperty('1')); // false because it is only for keys not values
console.log(user.hasOwnProperty('id')); // true
*/

//  **********  DESTRUCTURING OBJECTS (means changing names of keys of objects to shorter names so thtt it will be easier to use it again and again )

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: ins} = course // changing courseinstructor to ins

console.log(ins); //hitesh
//console.log(courseInstructor);// error => because now instead of courseInstructor only ins will be used 





