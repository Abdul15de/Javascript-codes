//<************** MEMORY STORAGE **********>

// PRTMITIVE DATATYPE is stored as stack and non primitive as heap
// so in primitive copy of variable is made while in non prmitive actual data is accesssed any change don s done to the original data

//*****EXAMPLES************************ */

//primitive 
let mark1 = 10;
let mark2 = mark1;
mark2 = 30;
console.log(mark2); //30
console.log(mark1);// 10 

//Non Primtive

let stdu1 = {
    mark : 10

};
 let stdu2 = stdu1;
 stdu2.mark = 30;
 
 console.log(stdu2);// { mark: 30 }
 console.log(stdu1);// { mark: 30 }


 // in primitive copy of mark1 is passed to mark2 so any change in mark 2 is not reflected in markk1 
 //In non-primitive reference of stdu1 is passed to stdu2 so change in marks of stdu2 is reflected in mark stfu 1 also.



